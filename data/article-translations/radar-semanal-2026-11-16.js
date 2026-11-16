// Las fuentes son las mismas en los tres idiomas: mismos enlaces y títulos originales;
// solo cambian el encabezado, las etiquetas de medio y el formato de la fecha.
const sourceList = [
  ["https://www.koreatimes.co.kr/world/20261116/china-confirms-first-xi-trump-putin-summit-on-thursday", "The Korea Times / AFP", "China confirms first Xi-Trump-Putin summit on Thursday", "2026-11-16"],
  ["https://tass.com/world/2218433", "TASS", "Xi Jinping to hold trilateral meeting with Putin, Trump on November 19 — Chinese MFA", "2026-11-16"],
  ["https://www.aljazeera.com/news/2026/11/12/why-did-nvidia-ceo-jensen-huang-resign-and-who-is-colette-kress", "Al Jazeera / Reuters", "Why did Nvidia CEO Jensen Huang resign, and who is Colette Kress?", "2026-11-12"],
  ["https://www.aljazeera.com/news/2026/11/15/us-treasury-chief-calls-for-outsider-to-lead-embattled-tech-firm-nvidia", "Al Jazeera / Reuters", "US Treasury chief calls for outsider to lead embattled tech firm Nvidia", "2026-11-15"],
  ["https://www.cbsnews.com/news/china-us-export-controls-chips-nvidia-huang-scandal/", "CBS News / AFP", "China warns against new U.S. export controls on chips in wake of Nvidia's Huang scandal", "2026-11-13"],
  ["https://informeexclusivo.com.bo/glj-ltd-certifica-que-las-reservas-de-gas-de-bolivia-al-31-de-diciembre-de-2025-alcanzan-230-tcf-en-categoria-1p/", "Informe Exclusivo (ANH-YPFB)", "GLJ Ltd. certifica que las reservas de gas de Bolivia al 31 de diciembre de 2025 alcanzan 2,30 TCF en categoría 1P", "2026-11-13"],
  ["https://www.opinion.com.bo/pais/ypfb-bolivia-tiene-230-tcf-reservas-gas-probadas-nivel-mas-ultimos-20-anos/20261113144250999110.html", "Opinión", "YPFB. Bolivia tiene 2,30 TCF de reservas de gas probadas, “nivel más bajo de los últimos 20 años”", "2026-11-13"],
  ["https://www.eldia.com.bo/2026-11-13/economia/ypfb-sin-reactivacion-bolivia-dejara-de-exportar-gas-en-el-2030-y-habra-deficit-en-el-mercado-interno.html", "El Día", "YPFB: sin reactivación Bolivia dejará de exportar gas en el 2030 y habrá déficit en el mercado interno", "2026-11-13"],
  ["https://asuntoscentrales.com/bolivia-necesita-us-2-000-millones-para-garantizar-gas-hasta-2035/", "Asuntos Centrales", "Bolivia necesita US$ 2.000 millones para garantizar gas hasta 2035", "2026-11-15"],
  ["https://www.aljazeera.com/news/2026/11/14/un-says-25-seafarers-killed-in-around-hormuz-since-february", "Al Jazeera", "UN says 25 seafarers killed in, around Hormuz since US-Israel war on Iran", "2026-11-14"],
  ["https://www.bnnbloomberg.ca/markets/oil/2026/11/13/world-oil-market-is-returning-to-surplus-as-gulf-exports-recover-iea-says/", "Reuters / BNN Bloomberg", "World oil market is returning to surplus as Gulf exports recover, IEA says", "2026-11-13"],
  ["https://www.newswire.lk/2026/11/16/oil-prices-fall-on-expectations-of-coming-supply-surplus/", "Reuters / Newswire", "Oil prices fall on expectations of coming supply surplus", "2026-11-16"],
  ["https://www.euronews.com/2026/11/11/abu-dhabi-peace-talks-end-with-prisoner-exchange-agreement-as-us-envoys-prepare-to-meet-pu", "Euronews", "Abu Dhabi peace talks end with prisoner exchange agreement as US envoys prepare to meet Putin", "2026-11-11"],
  ["https://www.aljazeera.com/news/2026/11/13/europe-seeks-seat-at-ukraine-peace-talks-but-lacks-unified-voice", "Al Jazeera", "EU agrees on five countries to represent Europe in Ukraine peace talks", "2026-11-13"],
  ["https://www.rferl.org/a/ukraine-russia-us-peace-talks/33897813.html", "RFE/RL", "After US Says Russia Agreed To European Role In Ukraine Talks, Kremlin Refuses To Confirm", "2026-11-13"],
  ["https://investfuture.ru/articles/dolya-rublya-v-raschetakh-za-rossiyskiy-eksport-dostigla-rekordnykh-69-7-1184583978", "RIA Novosti / InvestFuture", "Доля рубля в расчетах за российский экспорт достигла рекордных 69,7%", "2026-08-14"],
  ["https://meduza.io/en/news/2026/11/11/russia-s-plan-to-replace-the-dollar-with-the-yuan-failed-because-of-u-s-secondary-sanctions", "Meduza (Bloomberg)", "Russia's plan to replace the dollar with the yuan failed because of U.S. secondary sanctions", "2026-11-11"],
  ["https://aninews.in/news/world/asia/pm-modi-set-to-visit-manila-for-high-stake-asean-summit-as-world-leaders-converge-to-shape-indo-pacifics-security-economic-future20261116064203/", "ANI", "PM Modi set to visit Manila for high-stake ASEAN Summit as world leaders converge to shape Indo-Pacific's security, economic future", "2026-11-16"],
  ["https://www.arabnews.pk/world/global-powers-converge-on-manila-as-asean-summit-kicks-off-3007067", "Arab News / AFP", "Global powers converge on Manila as ASEAN summit kicks off", "2026-11-15"],
  ["https://www.worldoil.com/news/2026/11/13/exxonmobil-signs-mou-with-pdvsa-in-first-step-toward-venezuela-return/", "World Oil", "ExxonMobil signs MoU with PDVSA in first step toward Venezuela return", "2026-11-13"],
  ["https://www.bicmagazine.com/industry/refining-petrochem/exxon-assessing-7-areas-in-venezuela-for-possible-energy-projects/", "Reuters / BIC Magazine", "Exxon assessing 7 areas in Venezuela for possible energy projects", "2026-11-12"],
  ["https://www.infobae.com/america/agencias/2026/11/14/venezuela-proyecta-producir-tres-millones-de-barriles-diarios-de-petroleo-en-diez-anos/", "EFE / Infobae", "Venezuela proyecta producir tres millones de barriles diarios de petróleo en diez años", "2026-11-14"],
  ["https://www.infobae.com/america/agencias/2026/11/13/pdvsa-y-shell-firman-cinco-acuerdos-operativos-para-consolidar-desarrollo-e-inversiones/", "EFE / Infobae", "PDVSA y Shell firman cinco acuerdos operativos para consolidar desarrollo e inversiones", "2026-11-13"],
  ["https://agenciabrasil.ebc.com.br/internacional/noticia/2026-11/lula-quer-ampliar-relacoes-comerciais-com-paises-da-asean", "Agência Brasil", "Lula quer ampliar relações comerciais com países da Asean", "2026-11-15"],
  ["https://newswav.com/article/brazil-wants-stronger-partnership-with-asean-A2611_cT09i0", "The Manila Times / Newswav", "Brazil wants stronger partnership with Asean", "2026-11-15"],
  ["https://www.proceso.com.mx/nacional/2026/11/12/asi-respondio-sheinbaum-a-la-amenaza-de-trump-de-duplicar-los-aranceles-si-no-detiene-la-caravana-migrante-383585.html", "AP / Proceso", "Así respondió Sheinbaum a la amenaza de Trump de duplicar los aranceles si no detiene la caravana migrante", "2026-11-12"],
  ["https://www.informador.mx/mexico/sheinbaum-responde-a-la-amenaza-de-aranceles-de-trump-ninguna-caravana-migrante-ha-llegado-a-la-frontera-20261112-0066.html", "EFE / El Informador", "Sheinbaum responde a la amenaza de aranceles de Trump: “Ninguna caravana migrante ha llegado a la frontera”", "2026-11-12"],
];

const enMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formatDate = {
  en: (y, m, d) => `${d} ${enMonths[m - 1]} ${y}`,
  ru: (y, m, d) => `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`,
  zh: (y, m, d) => `${y}年${m}月${d}日`,
};
const quotes = { en: ["“", "”"], ru: ["«", "»"], zh: ["《", "》"] };

const sources = (locale, heading) => ({
  heading,
  paragraphs: sourceList.map(([url, outlet, title, date], index) => {
    const [y, m, d] = date.split("-").map(Number);
    const [open, close] = quotes[locale];
    const separator = locale === "zh" ? "，" : ", ";
    const label = `${outlet}${separator}${open}${title}${close}${separator}${formatDate[locale](y, m, d)}`;
    return `${index + 1}. <a href="${url}" target="_blank" rel="noopener">${label}</a>`;
  }),
});

export const radarSemanal20261116Translations = {
  en: {
    title: "Weekly radar: Shenzhen, Nvidia and Bolivia's gas",
    subtitle:
      "Ten signals from the week of 10–16 November: the major powers are again negotiating among a handful of capitals, while mid-sized countries manage their limits in energy, hard currency and technology.",
    excerpt:
      "Beijing confirms the first Xi–Putin–Trump meeting, Nvidia loses its founder in the middle of the chip dispute, and Bolivia certifies its lowest gas reserves in twenty years. Ten signals for reading the week.",
    tags: ["radar", "Shenzhen", "Nvidia", "Bolivia", "Venezuela", "Hormuz"],
    signals: [
      {
        title: "Beijing confirms the Shenzhen trilateral, with no agenda",
        detail:
          "China's Foreign Ministry confirmed on Monday 16 November that Xi Jinping will meet Vladimir Putin and Donald Trump on 19 November in Shenzhen, on the sidelines of the APEC summit, without specifying the topics. According to US officials cited by AFP, Washington wants to discuss reducing nuclear arsenals and the war with Iran, and does not expect to address Ukraine. It matters because China is lending the stage without sharing the script: it has long held that the United States and Russia must cut their arsenals first, and the format leaves out India and Brazil.",
      },
      {
        title: "Nvidia without Huang: chips become a national security matter",
        detail:
          "Jensen Huang resigned on 12 November as chief executive and board member of Nvidia after 33 years at the helm; the chief financial officer, Colette Kress, takes over on an interim basis. US media attribute to intelligence sources the suspicion, unproven and rejected by Beijing, that a former executive of the Singapore-based firm Megaspeed linked to Huang was working for Chinese intelligence. Treasury Secretary Scott Bessent called on 15 November for an outside successor and for answers from the board within ten days, while China's Foreign Ministry restated its opposition to the “abuse” of export controls: chip controls are no longer a purely commercial matter.",
      },
      {
        title: "Bolivia certifies 2.30 TCF of gas, a twenty-year low",
        detail:
          "On 13 November, YPFB presented the certification by the Canadian consultancy GLJ: 2.30 TCF of proven gas reserves as of 31 December 2025, compared with 10.1 TCF in 2013. Its president, Sebastián Daroca, warned that without investment the country would stop exporting in 2030 and face a deficit in the domestic market, and put at about 2 billion dollars the amount needed to secure supply until 2035. Around 70% of oil and gas revenue comes from exports, so losing exportable gas means, above all, losing hard currency.",
      },
      {
        title: "Venezuela reopens its oil to the Western majors",
        detail:
          "ExxonMobil signed a non-binding memorandum with PDVSA on 9 November, its first step back since the 2007 expropriation, with one year of exclusive negotiation over seven areas; on 12 November, PDVSA and Shell signed five operational agreements. According to EFE, the state company is aiming to produce 3 million barrels per day within ten years, compared with 1.22 million in October, and no investment amounts have been published. It matters because these are the world's largest crude reserves, and because Exxon makes any investment conditional on “stable policies”.",
      },
      {
        title: "Brazil asks to become a full ASEAN partner",
        detail:
          "At the Manila summit, Lula asked on 15 November to raise Brazil's relationship with ASEAN to a full Dialogue Partnership, after the first state visit by a Brazilian president to the Philippines, with which two memorandums were signed. Trade between Brazil and the bloc was 38.4 billion dollars in 2025, according to Agência Brasil. The results are modest, but they show a founding member of BRICS looking to Asia so as not to depend, in Lula's words, “on just one country”.",
      },
      {
        title: "Trump threatens to double tariffs on Mexico",
        detail:
          "Donald Trump warned on 12 November that tariffs on Mexico “will be doubled immediately” if the country does not stop the migrant caravans; no order or rate has been published. President Claudia Sheinbaum replied the same day that no caravan has reached the northern border since Trump took office. The threat comes in the middle of the USMCA review and again uses trade as migration leverage over one of the United States' main trading partners.",
      },
      {
        title: "Hormuz: less premium in the price, more risk at sea",
        detail:
          "The UN told the Security Council that at least 25 seafarers have been killed in and around Hormuz since February; using IMO data, Al Jazeera counts 136 incidents between 1 March and 11 November, 35 of them in October. Even so, the IEA expects fourth-quarter supply of 105 million barrels per day, 1.7 million above demand, and Brent is trading at around 95 dollars. The market is prioritising the surplus over a maritime risk that has not gone away.",
      },
      {
        title: "Ukraine: a swap in principle, and Europe asks for a seat",
        detail:
          "The trilateral round in Abu Dhabi on 10 and 11 November ended with an agreement in principle on a large prisoner exchange, with no progress on a ceasefire or on territory. On 13 November, António Costa announced in Dublin a European team made up of the EU, the United Kingdom, France, Germany, Italy and Poland for the next round; the Kremlin does not confirm that it accepted an expanded format, and its spokesman makes it conditional on Europe's readiness to contribute to the process. The next meeting has no date: who sits at the table is still part of the negotiation.",
      },
      {
        title: "Russia is paid in roubles: de-dollarisation changes shape",
        detail:
          "The rouble reached a record 69.7% of payments for Russian exports in June, and 69.1% for sales to Asia, according to data reported by RIA Novosti. According to Bloomberg, the yuan's weight in those payments fell in parallel to about half its 2024 peak, a decline the agency attributes to US secondary sanctions on banks since June 2024. If that reading is confirmed, Russian de-dollarisation is moving towards the national currency rather than the yuan, with the banking system as its limit.",
      },
      {
        title: "Manila: the Code of Conduct is left for 2027",
        detail:
          "At the 49th ASEAN Summit, the Philippine foreign ministry acknowledged that there is “not enough time” to conclude the South China Sea Code of Conduct under its chairmanship. About 80% of the text has been provisionally agreed, but it remains open, among other points, whether it will be legally binding; the negotiation passes to Singapore, which chairs the bloc in 2027. The region is hosting this week's great-power diplomacy, yet its main security dossier is postponed once again.",
      },
    ],
    outlook:
      "Read together, the signals show an order negotiated among a few capitals and on separate tracks: arms and Iran in Shenzhen, Ukraine in Abu Dhabi, chips in Washington. This shows us that multipolarity does not by itself widen the room for manoeuvre of mid-sized countries, which depend on concrete assets, whether gas reserves, banks willing to take on risk or access to computing power. The question for the coming week is whether Shenzhen produces anything more than an image.",
    bodySections: [sources("en", "Sources")],
  },
  ru: {
    title: "Еженедельный радар: Шэньчжэнь, Nvidia и боливийский газ",
    subtitle:
      "Десять сигналов недели с 10 по 16 ноября: великие державы вновь договариваются в узком кругу столиц, а средним странам приходится считаться с собственными пределами в энергетике, валюте и технологиях.",
    excerpt:
      "Пекин подтверждает первую встречу Си Цзиньпина, Путина и Трампа, Nvidia теряет основателя в разгар спора о чипах, а Боливия сертифицирует самые низкие запасы газа за двадцать лет. Десять сигналов, чтобы прочитать неделю.",
    tags: ["радар", "Шэньчжэнь", "Nvidia", "Боливия", "Венесуэла", "Ормуз"],
    signals: [
      {
        title: "Пекин подтверждает трёхстороннюю встречу в Шэньчжэне — без повестки",
        detail:
          "МИД Китая подтвердил в понедельник, 16 ноября, что Си Цзиньпин встретится с Владимиром Путиным и Дональдом Трампом 19 ноября в Шэньчжэне, на полях саммита АТЭС, не уточнив темы. По словам американских чиновников, на которых ссылается AFP, Вашингтон хочет говорить о сокращении ядерных арсеналов и о войне с Ираном и не рассчитывает обсуждать Украину. Это важно, потому что Китай предоставляет площадку, но не разделяет сценарий: он давно настаивает, что США и Россия должны первыми сократить свои арсеналы, а сам формат оставляет за скобками Индию и Бразилию.",
      },
      {
        title: "Nvidia без Хуанга: чипы становятся вопросом национальной безопасности",
        detail:
          "Дженсен Хуанг 12 ноября ушёл с постов генерального директора и члена совета директоров Nvidia после 33 лет во главе компании; временно её возглавила финансовый директор Колетт Кресс. Американские СМИ со ссылкой на источники в разведке сообщают о подозрении — не доказанном и отвергаемом Пекином, — что связанная с Хуангом бывшая руководительница сингапурской компании Megaspeed работала на китайскую разведку. Министр финансов США Скотт Бессент 15 ноября призвал найти преемника со стороны и потребовал от совета директоров ответов в течение десяти дней, а МИД Китая вновь выступил против «злоупотребления» экспортным контролем: контроль над чипами перестаёт быть сугубо торговым вопросом.",
      },
      {
        title: "Боливия сертифицирует 2,30 трлн куб. футов газа — минимум за двадцать лет",
        detail:
          "13 ноября YPFB представила сертификацию канадской консалтинговой компании GLJ: 2,30 трлн куб. футов (TCF) доказанных запасов газа на 31 декабря 2025 года против 10,1 TCF в 2013 году. Президент компании Себастьян Дарока предупредил, что без инвестиций страна в 2030 году прекратит экспорт и столкнётся с дефицитом на внутреннем рынке, и оценил примерно в 2 млрд долларов сумму, необходимую, чтобы обеспечить поставки до 2035 года. Около 70 % нефтегазовой ренты дают экспортные поставки, так что потерять экспортный газ — значит прежде всего потерять валюту.",
      },
      {
        title: "Венесуэла вновь открывает свою нефть для западных нефтяных гигантов",
        detail:
          "9 ноября ExxonMobil подписала с PDVSA необязывающий меморандум — первый шаг к возвращению после экспроприации 2007 года — с годом эксклюзивных переговоров по семи участкам; 12 ноября PDVSA и Shell подписали пять операционных соглашений. По данным агентства EFE, госкомпания намерена за десять лет выйти на добычу 3 млн баррелей в сутки против 1,22 млн в октябре, при этом объёмы инвестиций не раскрываются. Это важно, потому что речь идёт о крупнейших в мире запасах нефти и потому что Exxon ставит любые инвестиции в зависимость от «стабильной политики».",
      },
      {
        title: "Бразилия просит статус полноправного партнёра АСЕАН",
        detail:
          "На саммите в Маниле Лула 15 ноября попросил повысить отношения Бразилии с АСЕАН до полноформатного диалогового партнёрства — после первого государственного визита бразильского президента на Филиппины, с которыми были подписаны два меморандума. По данным Agência Brasil, товарооборот Бразилии с блоком в 2025 году составил 38,4 млрд долларов. Результаты скромные, но они показывают, что страна — основательница БРИКС ищет в Азии возможность, по словам Лулы, не зависеть «только от одной страны».",
      },
      {
        title: "Трамп угрожает удвоить пошлины для Мексики",
        detail:
          "Дональд Трамп 12 ноября предупредил, что пошлины для Мексики «будут немедленно удвоены», если страна не остановит караваны мигрантов; ни указа, ни ставки не опубликовано. Президент Клаудия Шейнбаум в тот же день ответила, что с момента прихода Трампа к власти ни один караван не дошёл до северной границы. Угроза прозвучала в разгар пересмотра соглашения ЮСМКА и вновь превращает торговлю в рычаг миграционного давления на одного из главных торговых партнёров США.",
      },
      {
        title: "Ормуз: меньше премии в цене, больше риска на море",
        detail:
          "ООН сообщила Совету Безопасности, что с февраля в Ормузском проливе и вокруг него погибли не менее 25 моряков; по данным ИМО, которые приводит «Аль-Джазира», с 1 марта по 11 ноября зафиксировано 136 инцидентов, из них 35 — в октябре. Тем не менее МЭА ожидает в четвёртом квартале предложение на уровне 105 млн баррелей в сутки, на 1,7 млн выше спроса, а Brent торгуется около 95 долларов. Рынок ставит избыток предложения выше морского риска, который никуда не исчез.",
      },
      {
        title: "Украина: обмен в принципе согласован, Европа просит место за столом",
        detail:
          "Трёхсторонний раунд в Абу-Даби 10 и 11 ноября завершился принципиальной договорённостью о крупном обмене пленными, без подвижек по прекращению огня и территориям. 13 ноября Антониу Кошта объявил в Дублине о европейской команде в составе ЕС, Великобритании, Франции, Германии, Италии и Польши для следующего раунда; Кремль не подтверждает, что согласился на расширенный формат, а его пресс-секретарь ставит это в зависимость от готовности Европы внести вклад в процесс. Дата следующей встречи не назначена: вопрос о том, кто сидит за столом, остаётся частью переговоров.",
      },
      {
        title: "Россия получает оплату в рублях: дедолларизация меняет форму",
        detail:
          "В июне доля рубля в расчётах за российский экспорт достигла рекордных 69,7 %, а в поставках в Азию — 69,1 %, по данным, которые приводит РИА Новости. По информации Bloomberg, доля юаня в этих расчётах параллельно сократилась примерно до половины максимума 2024 года; агентство объясняет это вторичными санкциями США против банков, действующими с июня 2024 года. Если такое прочтение подтвердится, российская дедолларизация движется к собственной валюте, а не к юаню, и её пределом оказывается банковская система.",
      },
      {
        title: "Манила: Кодекс поведения откладывается до 2027 года",
        detail:
          "На 49-м саммите АСЕАН МИД Филиппин признал, что «времени недостаточно», чтобы при филиппинском председательстве завершить Кодекс поведения в Южно-Китайском море. Около 80 % текста предварительно согласовано, но открытым остаётся, в частности, вопрос о том, будет ли он юридически обязывающим; переговоры переходят к Сингапуру, который председательствует в блоке в 2027 году. На этой неделе регион стал местом дипломатии великих держав, но его главное досье в сфере безопасности вновь отложено.",
      },
    ],
    outlook:
      "Взятые вместе, эти сигналы показывают порядок, о котором договариваются несколько столиц и по отдельным направлениям: вооружения и Иран — в Шэньчжэне, Украина — в Абу-Даби, чипы — в Вашингтоне. Это показывает нам, что многополярность сама по себе не расширяет пространство манёвра средних стран: оно зависит от конкретных активов — запасов газа, банков, готовых брать на себя риск, или доступа к вычислительным мощностям. Вопрос наступающей недели — даст ли Шэньчжэнь что-то большее, чем общую фотографию.",
    bodySections: [sources("ru", "Источники")],
  },
  zh: {
    title: "每周雷达：深圳、英伟达与玻利维亚天然气",
    subtitle:
      "11月10日至16日的十个信号：大国重新回到少数几个首都之间的谈判，而中等国家则在能源、外汇和技术上应对各自的限度。",
    excerpt:
      "北京确认习近平、普京与特朗普的首次三方会晤，英伟达在芯片争端之中失去创始人，玻利维亚认证的天然气储量降至二十年来最低。十个信号，读懂这一周。",
    tags: ["雷达", "深圳", "英伟达", "玻利维亚", "委内瑞拉", "霍尔木兹"],
    signals: [
      {
        title: "北京确认深圳三方会晤，但未公布议程",
        detail:
          "中国外交部11月16日（周一）确认，习近平将于11月19日在深圳亚太经合组织（APEC）峰会期间会见普京和特朗普，但未说明议题。据法新社援引美国官员的说法，华盛顿希望讨论削减核武库和对伊朗的战争，预计不会谈及乌克兰。其意义在于，中国提供了舞台，却不认同这份剧本：中方长期主张美俄应率先削减核武库，而这一形式也把印度和巴西排除在外。",
      },
      {
        title: "没有黄仁勋的英伟达：芯片成为国家安全议题",
        detail:
          "黄仁勋于11月12日辞去英伟达首席执行官和董事职务，结束了33年的掌舵；首席财务官科莱特·克雷斯（Colette Kress）出任临时首席执行官。美国媒体援引情报人士的说法称，有人怀疑一名与黄仁勋有关联的新加坡公司 Megaspeed 前高管曾为中国情报部门工作；这一怀疑未经证实，北京予以否认。美国财政部长斯科特·贝森特11月15日呼吁由外部人选接任，并要求董事会在十天内作出答复；中国外交部则重申反对“滥用”出口管制：芯片管制已不再只是商业问题。",
      },
      {
        title: "玻利维亚认证天然气储量2.30万亿立方英尺，为二十年来最低",
        detail:
          "玻利维亚国家石油公司（YPFB）11月13日公布了加拿大咨询公司 GLJ 的认证结果：截至2025年12月31日，天然气探明储量为2.30万亿立方英尺（TCF），而2013年为10.1 TCF。公司总裁塞巴斯蒂安·达罗卡警告说，如果没有投资，该国将在2030年停止出口，国内市场也会出现缺口；他估计，要把供应保障到2035年需要约20亿美元。约70%的油气收入来自出口，因此失去可供出口的天然气，首先意味着失去外汇。",
      },
      {
        title: "委内瑞拉向西方石油巨头重新开放石油",
        detail:
          "埃克森美孚11月9日与委内瑞拉国家石油公司（PDVSA）签署了一份不具约束力的备忘录，这是该公司自2007年资产被征收以来重返的第一步，备忘录给予其就七个区块进行为期一年的独家谈判权；11月12日，PDVSA 与壳牌签署了五项运营协议。据埃菲社报道，PDVSA 的目标是在十年内把产量提高到每日300万桶，而10月的产量为122万桶，投资金额尚未公布。其意义在于，这是全球最大的原油储量，而埃克森美孚把任何投资都与“稳定的政策”挂钩。",
      },
      {
        title: "巴西要求成为东盟全面对话伙伴",
        detail:
          "在马尼拉峰会上，卢拉于11月15日提出把巴西与东盟的关系提升为全面对话伙伴关系；此前他对菲律宾进行了巴西总统的首次国事访问，双方签署了两份备忘录。据巴西通讯社（Agência Brasil）报道，2025年巴西与东盟的贸易额为384亿美元。成果有限，但显示出一个金砖国家创始成员正在亚洲寻找出路，用卢拉的话说，就是不要“只依赖一个国家”。",
      },
      {
        title: "特朗普威胁将对墨西哥的关税提高一倍",
        detail:
          "特朗普11月12日警告说，如果墨西哥不阻止移民大篷车队，对墨西哥的关税将“立即翻倍”；目前尚未公布任何行政令或税率。墨西哥总统克劳迪娅·辛鲍姆当天回应称，自特朗普上任以来，没有任何大篷车队抵达北部边境。这一威胁发生在《美墨加协定》（USMCA）审议期间，再次把贸易当作移民问题上的筹码，施压对象是美国最主要的贸易伙伴之一。",
      },
      {
        title: "霍尔木兹：价格中的溢价减少，海上风险上升",
        detail:
          "联合国向安理会通报，自2月以来霍尔木兹海峡及其周边至少有25名海员丧生；半岛电视台援引国际海事组织（IMO）的数据称，3月1日至11月11日共发生136起事件，其中35起发生在10月。尽管如此，国际能源署（IEA）预计第四季度供应量为每日1.05亿桶，比需求高出170万桶，布伦特原油价格在95美元左右。市场更看重供应过剩，而不是并未消失的海上风险。",
      },
      {
        title: "乌克兰：原则上同意换俘，欧洲要求入席",
        detail:
          "11月10日至11日在阿布扎比举行的三方会谈以原则上同意大规模交换战俘告终，在停火和领土问题上没有进展。11月13日，安东尼奥·科斯塔在都柏林宣布，由欧盟以及英国、法国、德国、意大利和波兰组成欧洲团队参加下一轮会谈；克里姆林宫没有确认已接受扩大的形式，其发言人表示这取决于欧洲是否愿意为和平进程作出贡献。下一次会谈尚无日期：谁坐上谈判桌，本身仍是谈判的一部分。",
      },
      {
        title: "俄罗斯以卢布收款：去美元化改变了形态",
        detail:
          "据俄新社披露的数据，6月卢布在俄罗斯出口结算中的占比达到创纪录的69.7%，在对亚洲出口中为69.1%。彭博社称，与此同时，人民币在这些结算中的比重降至2024年峰值的一半左右，并将其归因于美国自2024年6月起对银行实施的次级制裁。如果这一判断得到证实，俄罗斯的去美元化是走向本国货币，而不是走向人民币，其界限在于银行体系。",
      },
      {
        title: "马尼拉：《行为准则》推迟到2027年",
        detail:
          "在第49届东盟峰会上，菲律宾外交部承认“时间不够”，无法在其担任轮值主席期间完成《南海行为准则》。约80%的案文已初步达成一致，但准则是否具有法律约束力等问题仍未解决；谈判将交给2027年担任东盟轮值主席的新加坡。本周这一地区汇聚了大国外交，但其最主要的安全议题再次被推迟。",
      },
    ],
    outlook:
      "综合来看，这些信号显示出一种在少数几个首都之间、按不同议题分别谈判的秩序：军控与伊朗在深圳，乌克兰在阿布扎比，芯片在华盛顿。这让我们看到，多极化本身并不会扩大中等国家的回旋空间；这种空间取决于具体的资产，无论是天然气储量、愿意承担风险的银行，还是获得算力的机会。新一周的问题是，深圳能否带来比一张合影更多的东西。",
    bodySections: [sources("zh", "资料来源")],
  },
};
