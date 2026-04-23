# GeoScope API Contracts & Integration Guide

## Overview
This document defines the API contracts for the GeoScope think tank website and outlines how the frontend will integrate with the backend to replace mock data with real database operations.

## Current Mock Data Structure (from /app/frontend/src/mock.js)

### 1. Translations
- **Status**: Keep as frontend-only
- **Action**: No backend needed - translations remain in frontend

### 2. Team Members
- **Mock Data**: `teamMembers` array with 3 members
- **Backend Model**: `TeamMember`
- **Endpoints Needed**:
  - `GET /api/team` - Get all team members
  - `POST /api/team` - Add new team member (admin)
  - `PUT /api/team/{id}` - Update team member (admin)
  - `DELETE /api/team/{id}` - Delete team member (admin)

### 3. Analysis Areas
- **Mock Data**: `analysisAreas` array with 4 areas
- **Backend Model**: `AnalysisArea`
- **Endpoints Needed**:
  - `GET /api/analysis-areas` - Get all analysis areas with article counts

### 4. Articles & Publications
- **Mock Data**: `articles` array with sample articles
- **Backend Model**: `Article`
- **Endpoints Needed**:
  - `GET /api/articles` - Get articles with filters (category, search, pagination)
  - `GET /api/articles/{id}` - Get single article
  - `POST /api/articles` - Create new article (admin)
  - `PUT /api/articles/{id}` - Update article (admin)
  - `DELETE /api/articles/{id}` - Delete article (admin)

### 5. Research Reports
- **Mock Data**: `reports` array
- **Backend Model**: `Report`
- **Endpoints Needed**:
  - `GET /api/reports` - Get reports with filters
  - `GET /api/reports/{id}` - Get single report
  - `POST /api/reports` - Create new report (admin)

### 6. Events
- **Mock Data**: `events` array
- **Backend Model**: `Event`
- **Endpoints Needed**:
  - `GET /api/events` - Get events with filters (upcoming/past, type)
  - `GET /api/events/{id}` - Get single event
  - `POST /api/events` - Create new event (admin)
  - `POST /api/events/{id}/register` - Register for event

### 7. Contact Form
- **Backend Model**: `ContactSubmission`
- **Endpoints Needed**:
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact` - Get submissions (admin)

### 8. Newsletter Subscriptions
- **Backend Model**: `Newsletter`
- **Endpoints Needed**:
  - `POST /api/newsletter/subscribe` - Subscribe to newsletter
  - `DELETE /api/newsletter/unsubscribe` - Unsubscribe

## Database Models

### TeamMember
```python
class TeamMember(BaseModel):
    id: str
    name: str
    position_es: str
    position_en: str
    bio_es: str
    bio_en: str
    image_url: str
    specialties: List[str]
    created_at: datetime
    updated_at: datetime
```

### AnalysisArea
```python
class AnalysisArea(BaseModel):
    id: str
    title_es: str
    title_en: str
    description_es: str
    description_en: str
    icon: str
    article_count: int
    created_at: datetime
```

### Article
```python
class Article(BaseModel):
    id: str
    title_es: str
    title_en: str
    excerpt_es: str
    excerpt_en: str
    content_es: str
    content_en: str
    author_id: str
    category: str  # geopolitics, economy, society, technology
    read_time: int
    featured: bool
    published_at: datetime
    created_at: datetime
    updated_at: datetime
    # Social metrics (optional)
    likes: int = 0
    comments: int = 0
    views: int = 0
```

### Report
```python
class Report(BaseModel):
    id: str
    title_es: str
    title_en: str
    description_es: str
    description_en: str
    category: str
    pages: int
    file_url: str
    published_date: datetime
    created_at: datetime
```

### Event
```python
class Event(BaseModel):
    id: str
    title_es: str
    title_en: str
    description_es: Optional[str]
    description_en: Optional[str]
    date: datetime
    time: str
    location_es: str
    location_en: str
    type: str  # virtual, presencial, híbrido
    capacity: Optional[int]
    registered_count: int = 0
    speakers: List[str]
    created_at: datetime
```

### ContactSubmission
```python
class ContactSubmission(BaseModel):
    id: str
    name: str
    email: str
    organization: Optional[str]
    contact_type: str  # general, research, media, events, institutional
    subject: str
    message: str
    created_at: datetime
    status: str = "pending"  # pending, responded, archived
```

### Newsletter
```python
class Newsletter(BaseModel):
    id: str
    email: str
    subscribed_at: datetime
    is_active: bool = True
```

## API Response Formats

### Standard Success Response
```json
{
    "success": true,
    "data": {...},
    "message": "Operation completed successfully"
}
```

### Standard Error Response
```json
{
    "success": false,
    "error": "Error message",
    "details": {...}
}
```

### Paginated Response
```json
{
    "success": true,
    "data": {
        "items": [...],
        "total": 100,
        "page": 1,
        "per_page": 10,
        "total_pages": 10
    }
}
```

## Frontend Integration Plan

### Phase 1: Core Data Models
1. Implement Team Members API and integrate with About page
2. Implement Articles API and integrate with Opinion page
3. Implement Analysis Areas API and integrate with Analysis page

### Phase 2: Content Management
1. Implement Reports API and integrate with Research page
2. Implement Events API and integrate with Events page
3. Add search and filtering functionality

### Phase 3: Interactive Features
1. Implement Contact form submission
2. Implement Newsletter subscription
3. Add event registration (if needed)

## Frontend Changes Required

### Remove Mock Data
- Remove imports of mock data objects from components
- Replace with API calls using axios

### Add API Service Layer
Create `/app/frontend/src/services/api.js`:
```javascript
import axios from 'axios';

const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

export const api = {
    team: {
        getAll: () => axios.get(`${API_BASE}/team`),
    },
    articles: {
        getAll: (filters) => axios.get(`${API_BASE}/articles`, { params: filters }),
        getById: (id) => axios.get(`${API_BASE}/articles/${id}`),
    },
    // ... more endpoints
};
```

### Add Loading States
- Add loading spinners for API calls
- Add error handling for failed requests
- Add empty states when no data

### Update Components
- Replace mock data with useEffect hooks that call APIs
- Add loading and error states to components
- Implement proper error boundaries

## Testing Strategy
1. Test all API endpoints with proper data
2. Test frontend integration with real backend
3. Test error scenarios and loading states
4. Test bilingual functionality with real data
5. Test responsive design with varying data lengths

## Security Considerations
- Implement proper CORS settings
- Add rate limiting for contact form
- Sanitize all user inputs
- Add basic admin authentication for content management (future)

## Performance Considerations
- Implement pagination for articles and reports
- Add caching for frequently accessed data
- Optimize image loading for team photos
- Add search indexing for better performance

This contracts file will guide the seamless integration between frontend and backend, ensuring all mock data is properly replaced with real database operations.