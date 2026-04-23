from fastapi import FastAPI, APIRouter, HTTPException, Query
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime
from enum import Enum


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="GeoScope API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Enums
class CategoryEnum(str, Enum):
    geopolitics = "geopolitics"
    economy = "economy"
    society = "society"
    technology = "technology"

class EventTypeEnum(str, Enum):
    virtual = "virtual"
    presencial = "presencial"
    hibrido = "híbrido"

class ContactTypeEnum(str, Enum):
    general = "general"
    research = "research"
    media = "media"
    events = "events"
    institutional = "institutional"


# Response Models
class APIResponse(BaseModel):
    success: bool
    data: Optional[Any] = None
    message: Optional[str] = None
    error: Optional[str] = None

class PaginatedResponse(BaseModel):
    success: bool
    data: Dict[str, Any]
    message: Optional[str] = None


# Database Models
class TeamMember(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    position_es: str
    position_en: str
    position_ru: str
    bio_es: str
    bio_en: str
    bio_ru: str
    image_url: str
    specialties: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class TeamMemberCreate(BaseModel):
    name: str
    position_es: str
    position_en: str
    position_ru: str
    bio_es: str
    bio_en: str
    bio_ru: str
    image_url: str
    specialties: List[str] = []

class AnalysisArea(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title_es: str
    title_en: str
    title_ru: str
    description_es: str
    description_en: str
    description_ru: str
    icon: str
    article_count: int = 0
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Article(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title_es: str
    title_en: str
    title_ru: str
    excerpt_es: str
    excerpt_en: str
    excerpt_ru: str
    content_es: str = ""
    content_en: str = ""
    content_ru: str = ""
    author: str
    category: CategoryEnum
    read_time: int
    featured: bool = False
    published_at: datetime = Field(default_factory=datetime.utcnow)
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    likes: int = 0
    comments: int = 0
    views: int = 0

class ArticleCreate(BaseModel):
    title_es: str
    title_en: str
    title_ru: str
    excerpt_es: str
    excerpt_en: str
    excerpt_ru: str
    content_es: str = ""
    content_en: str = ""
    content_ru: str = ""
    author: str
    category: CategoryEnum
    read_time: int
    featured: bool = False

class Report(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title_es: str
    title_en: str
    description_es: str
    description_en: str
    category: CategoryEnum
    pages: int
    file_url: Optional[str] = None
    published_date: datetime = Field(default_factory=datetime.utcnow)
    created_at: datetime = Field(default_factory=datetime.utcnow)

class ReportCreate(BaseModel):
    title_es: str
    title_en: str
    description_es: str
    description_en: str
    category: CategoryEnum
    pages: int
    file_url: Optional[str] = None

class Event(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title_es: str
    title_en: str
    description_es: Optional[str] = ""
    description_en: Optional[str] = ""
    date: str  # Store as string for simplicity
    time: str
    location_es: str
    location_en: str
    type: EventTypeEnum
    capacity: Optional[int] = None
    registered_count: int = 0
    speakers: List[str] = []
    created_at: datetime = Field(default_factory=datetime.utcnow)

class EventCreate(BaseModel):
    title_es: str
    title_en: str
    description_es: Optional[str] = ""
    description_en: Optional[str] = ""
    date: str
    time: str
    location_es: str
    location_en: str
    type: EventTypeEnum
    capacity: Optional[int] = None
    speakers: List[str] = []

class ContactSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    organization: Optional[str] = None
    contact_type: ContactTypeEnum
    subject: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    organization: Optional[str] = None
    contact_type: ContactTypeEnum
    subject: str
    message: str

class Newsletter(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = True

class NewsletterSubscribe(BaseModel):
    email: EmailStr


# Helper functions
# Helper functions
def serialize_mongo_doc(doc):
    """Convert MongoDB document to JSON serializable format"""
    if doc is None:
        return None
    if isinstance(doc, list):
        return [serialize_mongo_doc(item) for item in doc]
    if isinstance(doc, dict):
        result = {}
        for key, value in doc.items():
            if key == "_id":
                continue  # Skip MongoDB _id field
            result[key] = serialize_mongo_doc(value)
        return result
    return doc

async def update_analysis_area_counts():
    """Update article counts for all analysis areas"""
    areas = await db.analysis_areas.find().to_list(1000)
    for area in areas:
        # Map area titles to categories
        category_map = {
            "Geopolítica": "geopolitics",
            "Economía": "economy", 
            "Sociedad y Cultura": "society",
            "Tecnología y Defensa": "technology"
        }
        category = category_map.get(area['title_es'], 'geopolitics')
        count = await db.articles.count_documents({"category": category})
        await db.analysis_areas.update_one(
            {"_id": area['_id']}, 
            {"$set": {"article_count": count}}
        )


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return APIResponse(success=True, message="GeoScope API is running", data={"version": "1.0.0"})


# Team Members Endpoints
@api_router.get("/team")
async def get_team_members():
    try:
        team_members = await db.team_members.find().to_list(1000)
        serialized_members = serialize_mongo_doc(team_members)
        return APIResponse(success=True, data=serialized_members)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/team")
async def create_team_member(member: TeamMemberCreate):
    try:
        member_obj = TeamMember(**member.dict())
        await db.team_members.insert_one(member_obj.dict())
        return APIResponse(success=True, data=member_obj.dict(), message="Team member created successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Analysis Areas Endpoints
@api_router.get("/analysis-areas")
async def get_analysis_areas():
    try:
        await update_analysis_area_counts()
        areas = await db.analysis_areas.find().to_list(1000)
        serialized_areas = serialize_mongo_doc(areas)
        return APIResponse(success=True, data=serialized_areas)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Articles Endpoints
@api_router.get("/articles")
async def get_articles(
    category: Optional[str] = Query(None, description="Filter by category"),
    search: Optional[str] = Query(None, description="Search in title and excerpt"),
    featured: Optional[bool] = Query(None, description="Filter featured articles"),
    page: int = Query(1, ge=1, description="Page number"),
    per_page: int = Query(10, ge=1, le=50, description="Items per page")
):
    try:
        # Build filter query
        filter_query = {}
        if category and category != "all":
            filter_query["category"] = category
        if featured is not None:
            filter_query["featured"] = featured
        if search:
            filter_query["$or"] = [
                {"title_es": {"$regex": search, "$options": "i"}},
                {"title_en": {"$regex": search, "$options": "i"}},
                {"excerpt_es": {"$regex": search, "$options": "i"}},
                {"excerpt_en": {"$regex": search, "$options": "i"}}
            ]

        # Get total count
        total = await db.articles.count_documents(filter_query)
        
        # Get paginated results
        skip = (page - 1) * per_page
        articles = await db.articles.find(filter_query).sort("published_at", -1).skip(skip).limit(per_page).to_list(per_page)
        serialized_articles = serialize_mongo_doc(articles)
        
        total_pages = (total + per_page - 1) // per_page
        
        return PaginatedResponse(
            success=True,
            data={
                "items": serialized_articles,
                "total": total,
                "page": page,
                "per_page": per_page,
                "total_pages": total_pages
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/articles/{article_id}")
async def get_article(article_id: str):
    try:
        article = await db.articles.find_one({"id": article_id})
        if not article:
            raise HTTPException(status_code=404, detail="Article not found")
        
        # Increment view count
        await db.articles.update_one(
            {"id": article_id}, 
            {"$inc": {"views": 1}}
        )
        article["views"] += 1
        
        serialized_article = serialize_mongo_doc(article)
        return APIResponse(success=True, data=serialized_article)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/articles")
async def create_article(article: ArticleCreate):
    try:
        article_obj = Article(**article.dict())
        await db.articles.insert_one(article_obj.dict())
        
        # Update analysis area counts
        await update_analysis_area_counts()
        
        return APIResponse(success=True, data=article_obj.dict(), message="Article created successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Reports Endpoints
@api_router.get("/reports")
async def get_reports(
    category: Optional[str] = Query(None, description="Filter by category"),
    search: Optional[str] = Query(None, description="Search in title and description"),
    page: int = Query(1, ge=1, description="Page number"),
    per_page: int = Query(10, ge=1, le=50, description="Items per page")
):
    try:
        # Build filter query
        filter_query = {}
        if category and category != "all":
            filter_query["category"] = category
        if search:
            filter_query["$or"] = [
                {"title_es": {"$regex": search, "$options": "i"}},
                {"title_en": {"$regex": search, "$options": "i"}},
                {"description_es": {"$regex": search, "$options": "i"}},
                {"description_en": {"$regex": search, "$options": "i"}}
            ]

        # Get total count
        total = await db.reports.count_documents(filter_query)
        
        # Get paginated results
        skip = (page - 1) * per_page
        reports = await db.reports.find(filter_query).sort("published_date", -1).skip(skip).limit(per_page).to_list(per_page)
        serialized_reports = serialize_mongo_doc(reports)
        
        total_pages = (total + per_page - 1) // per_page
        
        return PaginatedResponse(
            success=True,
            data={
                "items": serialized_reports,
                "total": total,
                "page": page,
                "per_page": per_page,
                "total_pages": total_pages
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/reports/{report_id}")
async def get_report(report_id: str):
    try:
        report = await db.reports.find_one({"id": report_id})
        if not report:
            raise HTTPException(status_code=404, detail="Report not found")
        serialized_report = serialize_mongo_doc(report)
        return APIResponse(success=True, data=serialized_report)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/reports")
async def create_report(report: ReportCreate):
    try:
        report_obj = Report(**report.dict())
        await db.reports.insert_one(report_obj.dict())
        return APIResponse(success=True, data=report_obj.dict(), message="Report created successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Events Endpoints
@api_router.get("/events")
async def get_events(
    event_type: Optional[str] = Query(None, description="Filter by type"),
    upcoming: Optional[bool] = Query(None, description="Filter upcoming/past events"),
    search: Optional[str] = Query(None, description="Search in title and location"),
    page: int = Query(1, ge=1, description="Page number"),
    per_page: int = Query(20, ge=1, le=50, description="Items per page")
):
    try:
        # Build filter query
        filter_query = {}
        if event_type and event_type != "all":
            filter_query["type"] = event_type
        if search:
            filter_query["$or"] = [
                {"title_es": {"$regex": search, "$options": "i"}},
                {"title_en": {"$regex": search, "$options": "i"}},
                {"location_es": {"$regex": search, "$options": "i"}},
                {"location_en": {"$regex": search, "$options": "i"}}
            ]

        # Get total count
        total = await db.events.count_documents(filter_query)
        
        # Get paginated results
        skip = (page - 1) * per_page
        sort_order = 1 if upcoming else -1  # Ascending for upcoming, descending for past
        events = await db.events.find(filter_query).sort("date", sort_order).skip(skip).limit(per_page).to_list(per_page)
        serialized_events = serialize_mongo_doc(events)
        
        total_pages = (total + per_page - 1) // per_page
        
        return PaginatedResponse(
            success=True,
            data={
                "items": serialized_events,
                "total": total,
                "page": page,
                "per_page": per_page,
                "total_pages": total_pages
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/events/{event_id}")
async def get_event(event_id: str):
    try:
        event = await db.events.find_one({"id": event_id})
        if not event:
            raise HTTPException(status_code=404, detail="Event not found")
        serialized_event = serialize_mongo_doc(event)
        return APIResponse(success=True, data=serialized_event)
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/events")
async def create_event(event: EventCreate):
    try:
        event_obj = Event(**event.dict())
        await db.events.insert_one(event_obj.dict())
        return APIResponse(success=True, data=event_obj.dict(), message="Event created successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/events/{event_id}/register")
async def register_for_event(event_id: str):
    try:
        event = await db.events.find_one({"id": event_id})
        if not event:
            raise HTTPException(status_code=404, detail="Event not found")
        
        # Check capacity
        if event.get("capacity") and event.get("registered_count", 0) >= event["capacity"]:
            raise HTTPException(status_code=400, detail="Event is at full capacity")
        
        # Increment registration count
        await db.events.update_one(
            {"id": event_id}, 
            {"$inc": {"registered_count": 1}}
        )
        
        return APIResponse(success=True, message="Successfully registered for event")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Contact Form Endpoints
@api_router.post("/contact")
async def submit_contact_form(submission: ContactSubmissionCreate):
    try:
        submission_obj = ContactSubmission(**submission.dict())
        await db.contact_submissions.insert_one(submission_obj.dict())
        return APIResponse(success=True, message="Contact form submitted successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/contact")
async def get_contact_submissions(
    status: Optional[str] = Query(None, description="Filter by status"),
    page: int = Query(1, ge=1, description="Page number"),
    per_page: int = Query(20, ge=1, le=50, description="Items per page")
):
    try:
        filter_query = {}
        if status:
            filter_query["status"] = status

        total = await db.contact_submissions.count_documents(filter_query)
        skip = (page - 1) * per_page
        submissions = await db.contact_submissions.find(filter_query).sort("created_at", -1).skip(skip).limit(per_page).to_list(per_page)
        serialized_submissions = serialize_mongo_doc(submissions)
        
        total_pages = (total + per_page - 1) // per_page
        
        return PaginatedResponse(
            success=True,
            data={
                "items": serialized_submissions,
                "total": total,
                "page": page,
                "per_page": per_page,
                "total_pages": total_pages
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Newsletter Endpoints
@api_router.post("/newsletter/subscribe")
async def subscribe_newsletter(subscription: NewsletterSubscribe):
    try:
        # Check if already subscribed
        existing = await db.newsletter.find_one({"email": subscription.email})
        if existing:
            if existing.get("is_active", True):
                return APIResponse(success=True, message="Email is already subscribed")
            else:
                # Reactivate subscription
                await db.newsletter.update_one(
                    {"email": subscription.email}, 
                    {"$set": {"is_active": True, "subscribed_at": datetime.utcnow()}}
                )
                return APIResponse(success=True, message="Newsletter subscription reactivated")
        
        # New subscription
        newsletter_obj = Newsletter(**subscription.dict())
        await db.newsletter.insert_one(newsletter_obj.dict())
        return APIResponse(success=True, message="Successfully subscribed to newsletter")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.delete("/newsletter/unsubscribe")
async def unsubscribe_newsletter(email: EmailStr):
    try:
        result = await db.newsletter.update_one(
            {"email": email}, 
            {"$set": {"is_active": False}}
        )
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Email not found in newsletter list")
        
        return APIResponse(success=True, message="Successfully unsubscribed from newsletter")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Data Reset Endpoint (for updating team names)
@api_router.post("/reset-data")
async def reset_data():
    try:
        # Clear existing data
        await db.team_members.delete_many({})
        await db.analysis_areas.delete_many({})
        await db.articles.delete_many({})
        await db.reports.delete_many({})
        await db.events.delete_many({})
        
        # Re-initialize with correct names
        return await initialize_data()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Data Initialization Endpoint (for seeding initial data)
@api_router.post("/init-data")
async def initialize_data():
    try:
        # Check if data already exists
        team_count = await db.team_members.count_documents({})
        if team_count > 0:
            return APIResponse(success=True, message="Data already initialized")

        # Initialize team members from mock data
        team_members = [
            {
                "id": str(uuid.uuid4()),
                "name": "Maria Luisa Ramos Urzagaste",
                "position_es": "Directora de Geopolítica",
                "position_en": "Director of Geopolitics",
                "position_ru": "Директор по геополитике",
                "bio_es": "Experta en análisis geopolítico con amplia experiencia en relaciones internacionales y estrategia global.",
                "bio_en": "Expert in geopolitical analysis with extensive experience in international relations and global strategy.",
                "bio_ru": "Эксперт по геополитическому анализу с обширным опытом в международных отношениях и глобальной стратегии.",
                "image_url": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
                "specialties": ["Geopolitics", "International Relations"],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Javier Jonathan Salazar Segales",
                "position_es": "Analista Económico y Especialista en Tecnología",
                "position_en": "Economic Analyst and Technology Specialist",
                "position_ru": "Экономический аналитик и специалист по технологиям",
                "bio_es": "Experto multidisciplinario en análisis económico y tecnologías emergentes con amplia experiencia en ambos campos.",
                "bio_en": "Multidisciplinary expert in economic analysis and emerging technologies with extensive experience in both fields.",
                "bio_ru": "Многодисциплинарный эксперт по экономическому анализу и новым технологиям с обширным опытом в обеих областях.",
                "image_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
                "specialties": ["Economics", "Technology", "Trade Analysis", "Cybersecurity", "Emerging Tech"],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Dr. Ricardo Alejandro Mendoza Torres",
                "position_es": "Experto en Derechos Internacionales y Geopolítica",
                "position_en": "International Law and Geopolitics Expert",
                "position_ru": "Эксперт по международному праву и геополитике",
                "bio_es": "Especialista en derecho internacional público y análisis geopolítico con enfoque en resolución de conflictos y diplomacia multilateral.",
                "bio_en": "Specialist in public international law and geopolitical analysis with focus on conflict resolution and multilateral diplomacy.",
                "bio_ru": "Специалист по публичному международному праву и геополитическому анализу с акцентом на разрешение конфликтов и многостороннюю дипломатию.",
                "image_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
                "specialties": ["International Law", "Geopolitics", "Conflict Resolution", "Multilateral Diplomacy"],
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow()
            }
        ]
        
        await db.team_members.insert_many(team_members)

        # Initialize analysis areas
        analysis_areas = [
            {
                "id": str(uuid.uuid4()),
                "title_es": "Geopolítica",
                "title_en": "Geopolitics",
                "title_ru": "Геополитика",
                "description_es": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                "description_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                "description_ru": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                "icon": "Globe",
                "article_count": 0,
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Economía",
                "title_en": "Economy",
                "title_ru": "Экономика",
                "description_es": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                "description_en": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                "description_ru": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                "icon": "TrendingUp",
                "article_count": 0,
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Sociedad y Cultura",
                "title_en": "Society & Culture",
                "title_ru": "Общество и культура",
                "description_es": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                "description_en": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                "description_ru": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                "icon": "Users",
                "article_count": 0,
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Tecnología y Defensa",
                "title_en": "Technology & Defense",
                "title_ru": "Технологии и оборона",
                "description_es": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
                "description_en": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
                "description_ru": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
                "icon": "Shield",
                "article_count": 0,
                "created_at": datetime.utcnow()
            }
        ]
        
        await db.analysis_areas.insert_many(analysis_areas)

        # Initialize sample articles
        articles = [
            {
                "id": str(uuid.uuid4()),
                "title_es": "El futuro de las relaciones comerciales globales",
                "title_en": "The future of global trade relations",
                "title_ru": "Будущее глобальных торговых отношений",
                "excerpt_es": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "excerpt_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "excerpt_ru": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "content_es": "Contenido completo del artículo en español...",
                "content_en": "Full article content in English...",
                "content_ru": "Полное содержание статьи на русском языке...",
                "author": "Maria Luisa Ramos Urzagaste",
                "category": "economy",
                "read_time": 8,
                "featured": False,
                "published_at": datetime.utcnow(),
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow(),
                "likes": 45,
                "comments": 12,
                "views": 234
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Tecnología emergente en conflictos modernos",
                "title_en": "Emerging technology in modern conflicts",
                "title_ru": "Передовые технологии в современных конфликтах",
                "excerpt_es": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "excerpt_en": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "excerpt_ru": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content_es": "Contenido completo del artículo en español...",
                "content_en": "Full article content in English...",
                "content_ru": "Полное содержание статьи на русском языке...",
                "author": "Javier Jonathan Salazar Segales",
                "category": "technology",
                "read_time": 12,
                "featured": True,
                "published_at": datetime.utcnow(),
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow(),
                "likes": 67,
                "comments": 18,
                "views": 456
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Análisis geopolítico del sudeste asiático",
                "title_en": "Geopolitical analysis of Southeast Asia",
                "title_ru": "Геополитический анализ Юго-Восточной Азии",
                "excerpt_es": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "excerpt_en": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "excerpt_ru": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "content_es": "Contenido completo del artículo en español...",
                "content_en": "Full article content in English...",
                "content_ru": "Полное содержание статьи на русском языке...",
                "author": "Javier Jonathan Salazar Segales",
                "category": "geopolitics",
                "read_time": 10,
                "featured": True,
                "published_at": datetime.utcnow(),
                "created_at": datetime.utcnow(),
                "updated_at": datetime.utcnow(),
                "likes": 89,
                "comments": 24,
                "views": 678
            }
        ]
        
        await db.articles.insert_many(articles)

        # Initialize sample reports
        reports = [
            {
                "id": str(uuid.uuid4()),
                "title_es": "Informe Anual de Geopolítica 2023",
                "title_en": "Annual Geopolitics Report 2023",
                "description_es": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "description_en": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "category": "geopolitics",
                "pages": 156,
                "file_url": None,
                "published_date": datetime.utcnow(),
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Análisis Económico Q4 2023",
                "title_en": "Economic Analysis Q4 2023",
                "description_es": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "description_en": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "category": "economy",
                "pages": 89,
                "file_url": None,
                "published_date": datetime.utcnow(),
                "created_at": datetime.utcnow()
            }
        ]
        
        await db.reports.insert_many(reports)

        # Initialize sample events
        events = [
            {
                "id": str(uuid.uuid4()),
                "title_es": "Conferencia Anual de Geopolítica 2024",
                "title_en": "Annual Geopolitics Conference 2024",
                "description_es": "Un evento imprescindible para profesionales interesados en el análisis geopolítico contemporáneo.",
                "description_en": "An essential event for professionals interested in contemporary geopolitical analysis.",
                "date": "2024-03-15",
                "time": "09:00",
                "location_es": "Centro de Convenciones",
                "location_en": "Convention Center",
                "type": "presencial",
                "capacity": 200,
                "registered_count": 45,
                "speakers": ["Dr. María González", "Prof. Carlos Mendez"],
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "title_es": "Webinar: Tendencias Económicas Globales",
                "title_en": "Webinar: Global Economic Trends",
                "description_es": "Análisis de las principales tendencias económicas que están moldeando el futuro global.",
                "description_en": "Analysis of the main economic trends shaping the global future.",
                "date": "2024-02-20",
                "time": "15:00",
                "location_es": "Online",
                "location_en": "Online",
                "type": "virtual",
                "capacity": None,
                "registered_count": 156,
                "speakers": ["Prof. Carlos Mendez"],
                "created_at": datetime.utcnow()
            }
        ]
        
        await db.events.insert_many(events)
        
        # Update analysis area counts
        await update_analysis_area_counts()

        return APIResponse(success=True, message="Sample data initialized successfully")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
