// ========================================
// 1. Mobile menu: open and close
// ========================================
var toggle = document.querySelector('.nav-toggle');
var links = document.querySelector('.nav-links');
var activeLanguage = 'ru';

var translations = {
  ru: {
    pageTitle: 'SummerWay USA | Работа и путешествия в США для студентов',
    pageDescription: 'SummerWay USA — концепция программы Work and Travel USA для студентов из Казахстана.',
    menuLabel: 'Открыть меню',
    languageLabel: 'Выбрать язык',
    navBenefits: 'Преимущества',
    navSteps: 'Как это работает',
    navJobs: 'Летняя работа',
    navCosts: 'Расходы',
    navFaq: 'Вопросы и ответы',
    apply: 'Оставить заявку',
    heroEyebrow: 'Work and Travel USA · Для студентов из Казахстана',
    heroTitle: 'Твоё американское <em>лето</em> начинается здесь.',
    heroLead: 'Работай на сезонной работе, знакомься с людьми со всего мира и путешествуй по США. Мы поможем разобраться в каждом этапе и подготовиться к поездке.',
    seeSteps: 'Узнать, как это работает',
    heroDisclaimer: 'Участие зависит от соответствия требованиям программы, одобрения спонсора и решения о выдаче визы, которое принимает правительство США. Гарантий нет.',
    benefitsEyebrow: 'Почему студенты выбирают программу',
    benefitsTitle: 'Лето, которое даст больше, чем строчку в резюме',
    benefit1Title: 'Настоящий трудовой опыт',
    benefit1Text: 'Проведи летние каникулы, работая в сфере гостеприимства и отдыха в США.',
    benefit2Title: 'Ежедневная практика английского',
    benefit2Text: 'Общайся на английском с коллегами и гостями — так ты быстрее обретёшь уверенность.',
    benefit3Title: 'Культурный обмен',
    benefit3Text: 'Поживи в новом месте и познакомься со студентами из разных стран.',
    benefit4Title: 'Время для путешествий',
    benefit4Text: 'Многие участники используют время в конце программы, чтобы увидеть больше уголков страны.',
    stepsEyebrow: 'Этапы участия',
    stepsTitle: 'От первого вопроса до отъезда',
    step1Title: 'Проверь требования',
    step1Text: 'Убедись, что ты учишься в университете на очной форме и соответствуешь правилам программы.',
    step2Title: 'Получи консультацию',
    step2Text: 'Мы расскажем о программе, расходах и твоих обязанностях.',
    step3Title: 'Подготовь документы',
    step3Text: 'Собери документы, подтверждающие статус студента и уровень английского.',
    step4Title: 'Выбери работу и пройди отбор спонсора',
    step4Text: 'Пройди процесс трудоустройства, предусмотренный спонсором программы.',
    step5Title: 'Пройди собеседование на визу',
    step5Text: 'Посети собеседование. Решение принимает посольство США.',
    step6Title: 'Посети инструктаж перед отъездом',
    step6Text: 'Узнай о поездке, жилье, безопасности и о том, чего ожидать по прибытии.',
    jobsEyebrow: 'Летняя работа',
    jobsTitle: 'Популярные направления сезонной работы',
    jobsIntro: 'Примеры распространённых вакансий. Доступность зависит от сезона и не гарантируется.',
    job1Title: 'Отели и курорты',
    job1Text: 'Работа на ресепшене, уборка, обслуживание гостей.',
    job2Title: 'Рестораны и кафе',
    job2Text: 'Официант, хостес, помощь на кухне, работа в пекарне.',
    job3Title: 'Парки развлечений',
    job3Text: 'Обслуживание аттракционов, точки питания, помощь гостям.',
    job4Title: 'Магазины и сувенирные лавки',
    job4Text: 'Кассир, продавец-консультант, выкладка товаров.',
    job5Title: 'Пляжи и зоны отдыха',
    job5Text: 'Прокат оборудования, помощь в обслуживании объектов.',
    job6Title: 'Аквапарки и бассейны',
    job6Text: 'Обслуживание гостей, работа в точках питания, помощь в обслуживании.',
    costsEyebrow: 'Примерные расходы',
    costsTitle: 'Планируй бюджет заранее',
    costsDisclaimerTitle: 'Указаны условные суммы.',
    costsDisclaimer: 'Перед реальным использованием сайта замени их на точные данные от спонсора и официальных источников правительства США.',
    expense: 'Расход',
    sampleRange: 'Примерная сумма',
    costAgency: 'Услуги агентства',
    costAgencyValue: '[Укажите стоимость]',
    costSponsor: 'Сбор спонсора программы',
    costSponsorValue: '[Укажите сбор спонсора]',
    costVisa: 'Виза США и сбор SEVIS',
    checkOfficial: 'Проверьте официальные источники',
    costFlights: 'Авиабилеты туда и обратно',
    costHousing: 'Первоначальные расходы на жильё и питание',
    costInsurance: 'Страховка',
    costInsuranceValue: '[Укажите примерную стоимость]',
    faqEyebrow: 'Вопросы и ответы',
    faqTitle: 'Частые вопросы',
    faq1Title: 'Кто может подать заявку?',
    faq1Answer: '<p>Программа Work and Travel USA предназначена для студентов, которые хотят провести лето в США, получить международный опыт работы, улучшить английский язык и познакомиться с американской культурой.</p><p><strong>Вы можете подать заявку, если:</strong></p><ul><li>Вы являетесь студентом очной формы обучения в аккредитованном вузе за пределами США.</li><li>Вам исполнилось 18 лет.</li><li>Вы владеете английским языком на уровне, достаточном для общения и выполнения рабочих обязанностей.</li><li>Вы успешно завершили как минимум один семестр обучения в университете к началу программы.</li><li>Вы готовы соблюдать правила программы и вернуться в свою страну после её окончания.</li></ul><p class="note"><strong>Важно:</strong> окончательное решение об участии зависит от требований американского спонсора, работодателя и условий получения визы J-1. Требования к возрасту, обучению и английскому языку могут различаться.</p>',
    faq2Title: 'Виза гарантирована?',
    faq2Answer: '<p>Нет. Решение о визе принимает только посольство или консульство США. Мы помогаем подготовиться к собеседованию, но результат гарантировать не можем.</p>',
    faq3Title: 'Работа гарантирована?',
    faq3Answer: '<p><strong>Нет, трудоустройство не гарантируется.</strong> Мы помогаем участникам подобрать подходящие вакансии и пройти процесс трудоустройства. Доступность конкретных вакансий зависит от работодателей и условий программы. Окончательное трудоустройство зависит от успешного прохождения отбора и выполнения требований работодателя.</p><p>Наша цель — помочь вам подготовиться к работе в США на каждом этапе программы.</p>',
    faq4Title: 'Какой уровень английского нужен?',
    faq4Answer: '<p>Для участия в программе Work and Travel USA необходимо владеть английским языком на уровне, достаточном для повседневного общения и выполнения рабочих обязанностей.</p><p><strong>Рекомендуемый уровень — A2–B1 и выше.</strong></p><p>Вам нужно уметь:</p><ul><li>Общаться с работодателем и коллегами.</li><li>Понимать инструкции на рабочем месте.</li><li>Отвечать на вопросы во время собеседования.</li><li>Объясняться в повседневных ситуациях.</li></ul><p>Не обязательно говорить идеально! Главное — понимать английскую речь и уметь выражать свои мысли. Точный уровень определяется требованиями спонсора и работодателя.</p>',
    faq5Title: 'Когда лучше начать?',
    faq5Answer: '<p>Чем раньше, тем лучше: подготовка документов, подбор вакансии и собеседования занимают время. Начинайте за несколько месяцев до лета.</p>',
    contactTitle: 'Расскажи о себе',
    contactLead: 'Заполни форму, и мы ответим тебе по электронной почте, чтобы обсудить дальнейшие шаги.',
    formName: 'Имя и фамилия',
    formEmail: 'Электронная почта',
    formPhone: 'Телефон / WhatsApp',
    formUniversity: 'Университет и курс',
    formMessage: 'Сообщение',
    consent: 'Я согласен(на), что SummerWay USA может использовать мои данные, чтобы связаться со мной по поводу этого обращения.',
    send: 'Отправить',
    footerDisclaimer: '<strong>SummerWay USA</strong> — вымышленное агентство, созданное для проекта веб-дизайна. Оно не связано с реальными агентствами, спонсорами или государственными организациями.',
    footerConcept: 'Концепция SummerWay USA',
    statusRequired: 'Укажите имя и действующий адрес электронной почты.',
    statusConsent: 'Пожалуйста, подтвердите согласие на обработку данных.',
    statusSending: 'Отправка…',
    statusSent: 'Спасибо! Ваше сообщение отправлено.',
    statusFailed: 'Не удалось отправить сообщение',
    statusNetwork: 'Проблема с сетью'
  },
  en: {
    pageTitle: 'SummerWay USA | Work and Travel USA for Students',
    pageDescription: 'SummerWay USA is a Work and Travel USA program concept for students in Kazakhstan.',
    menuLabel: 'Open menu',
    languageLabel: 'Choose language',
    navBenefits: 'Benefits',
    navSteps: 'How it works',
    navJobs: 'Summer jobs',
    navCosts: 'Costs',
    navFaq: 'FAQ',
    apply: 'Apply now',
    heroEyebrow: 'Work and Travel USA · For students in Kazakhstan',
    heroTitle: 'Your American <em>summer</em> starts here.',
    heroLead: 'Work seasonal jobs, meet people from around the world, and explore the USA. We help you understand each step clearly, so you can prepare with confidence.',
    seeSteps: 'See how it works',
    heroDisclaimer: 'Participation depends on program eligibility, sponsor approval, and visa decisions made by the U.S. government. Nothing is guaranteed.',
    benefitsEyebrow: 'Why students choose the program',
    benefitsTitle: 'A summer that builds more than a résumé',
    benefit1Title: 'Real work experience',
    benefit1Text: 'Spend your summer break working in seasonal roles in the U.S. hospitality and recreation industries.',
    benefit2Title: 'Practice English every day',
    benefit2Text: 'Use English with colleagues and guests to build confidence faster.',
    benefit3Title: 'Cultural exchange',
    benefit3Text: 'Live in a new community and meet students from many countries.',
    benefit4Title: 'Time to travel',
    benefit4Text: 'Many participants use time at the end of the program to see more of the country.',
    stepsEyebrow: 'Participation steps',
    stepsTitle: 'From your first question to departure',
    step1Title: 'Check your eligibility',
    step1Text: 'Confirm that you are a full-time university student and meet the program requirements.',
    step2Title: 'Get a consultation',
    step2Text: 'We explain the program, costs, and your responsibilities.',
    step3Title: 'Prepare your documents',
    step3Text: 'Gather documents confirming your student status and English level.',
    step4Title: 'Choose a job and complete sponsor screening',
    step4Text: 'Follow the job placement process provided by the program sponsor.',
    step5Title: 'Attend your visa interview',
    step5Text: 'Attend your interview. The U.S. Embassy makes the decision.',
    step6Title: 'Attend a pre-departure briefing',
    step6Text: 'Learn about travel, housing, safety, and what to expect when you arrive.',
    jobsEyebrow: 'Summer jobs',
    jobsTitle: 'Popular seasonal job areas',
    jobsIntro: 'Examples of common jobs. Availability changes each season and is never guaranteed.',
    job1Title: 'Hotels and resorts',
    job1Text: 'Front desk, housekeeping, and guest services.',
    job2Title: 'Restaurants and cafés',
    job2Text: 'Server, host, kitchen support, and bakery roles.',
    job3Title: 'Amusement parks',
    job3Text: 'Ride operations, food stands, and guest assistance.',
    job4Title: 'Retail and gift shops',
    job4Text: 'Cashier, sales associate, and stock roles.',
    job5Title: 'Beaches and recreation',
    job5Text: 'Equipment rental and facility support.',
    job6Title: 'Water parks and pools',
    job6Text: 'Guest services, concessions, and maintenance support.',
    costsEyebrow: 'Estimated costs',
    costsTitle: 'Plan your budget early',
    costsDisclaimerTitle: 'Sample placeholder figures.',
    costsDisclaimer: 'Replace these with verified figures from your sponsor and official U.S. government sources before using this site for real.',
    expense: 'Expense',
    sampleRange: 'Sample amount',
    costAgency: 'Agency service fee',
    costAgencyValue: '[Add your fee]',
    costSponsor: 'Program sponsor fee',
    costSponsorValue: '[Add sponsor fee]',
    costVisa: 'U.S. visa and SEVIS fees',
    checkOfficial: 'Check official sources',
    costFlights: 'Round-trip flights',
    costHousing: 'Initial housing and food',
    costInsurance: 'Insurance',
    costInsuranceValue: '[Add estimate]',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    faq1Title: 'Who can apply?',
    faq1Answer: '<p>The Work and Travel USA program is for students who want to spend the summer in the U.S., gain international work experience, improve their English, and learn about American culture.</p><p><strong>You may apply if:</strong></p><ul><li>You are a full-time student at an accredited university outside the U.S.</li><li>You are at least 18 years old.</li><li>Your English is good enough for communication and your job duties.</li><li>You will have completed at least one university semester by the start of the program.</li><li>You are ready to follow program rules and return to your country after the program.</li></ul><p class="note"><strong>Important:</strong> final participation decisions depend on the U.S. sponsor and employer requirements, as well as J-1 visa eligibility. Age, study, and English requirements may vary.</p>',
    faq2Title: 'Is a visa guaranteed?',
    faq2Answer: '<p>No. Only the U.S. Embassy or Consulate makes visa decisions. We can help you prepare for the interview, but we cannot guarantee the outcome.</p>',
    faq3Title: 'Is a job guaranteed?',
    faq3Answer: '<p><strong>No, employment is not guaranteed.</strong> We help participants find suitable vacancies and go through the hiring process. Specific vacancies depend on employers and program conditions. Final employment depends on successful screening and meeting the employer requirements.</p><p>Our goal is to help you prepare for working in the U.S. at every stage of the program.</p>',
    faq4Title: 'What English level do I need?',
    faq4Answer: '<p>You need enough English for everyday communication and your job duties to participate in Work and Travel USA.</p><p><strong>The recommended level is A2–B1 or higher.</strong></p><p>You should be able to:</p><ul><li>Communicate with your employer and colleagues.</li><li>Understand instructions at work.</li><li>Answer questions during an interview.</li><li>Communicate in everyday situations.</li></ul><p>You do not need perfect English! The key is to understand spoken English and express yourself. Exact requirements depend on the sponsor and employer.</p>',
    faq5Title: 'When should I start?',
    faq5Answer: '<p>The earlier the better: preparing documents, finding a job, and attending interviews take time. Start several months before summer.</p>',
    contactTitle: 'Tell us about yourself',
    contactLead: 'Fill in the form and we will reply by email about the next steps.',
    formName: 'Full name',
    formEmail: 'Email',
    formPhone: 'Phone / WhatsApp',
    formUniversity: 'University and year',
    formMessage: 'Message',
    consent: 'I agree that SummerWay USA may use my details to contact me about this inquiry.',
    send: 'Send',
    footerDisclaimer: '<strong>SummerWay USA</strong> is a fictional agency created for a website design project. It is not affiliated with any real agency, sponsor, or government body.',
    footerConcept: 'SummerWay USA concept',
    statusRequired: 'Please enter your name and a valid email.',
    statusConsent: 'Please confirm your consent to the use of your details.',
    statusSending: 'Sending…',
    statusSent: 'Thank you. Your message was sent.',
    statusFailed: 'Sorry, the message could not be sent',
    statusNetwork: 'Network problem'
  },
  kk: {
    pageTitle: 'SummerWay USA | Студенттерге арналған АҚШ-тағы жұмыс және саяхат',
    pageDescription: 'SummerWay USA — Қазақстан студенттеріне арналған Work and Travel USA бағдарламасының тұжырымдамасы.',
    menuLabel: 'Мәзірді ашу',
    languageLabel: 'Тілді таңдау',
    navBenefits: 'Артықшылықтары',
    navSteps: 'Қалай жұмыс істейді',
    navJobs: 'Жазғы жұмыс',
    navCosts: 'Шығындар',
    navFaq: 'Сұрақ-жауап',
    apply: 'Өтінім қалдыру',
    heroEyebrow: 'Work and Travel USA · Қазақстан студенттеріне арналған',
    heroTitle: 'Америкалық <em>жазың</em> осы жерден басталады.',
    heroLead: 'Маусымдық жұмыс істеп, әлемнің түкпір-түкпірінен келген адамдармен танысып, АҚШ-ты арала. Біз әр кезеңді түсінуге және сапарға сенімді дайындалуға көмектесеміз.',
    seeSteps: 'Бағдарламамен танысу',
    heroDisclaimer: 'Қатысу бағдарлама талаптарына сәйкестікке, демеушінің мақұлдауына және АҚШ үкіметінің виза туралы шешіміне байланысты. Ешқандай кепілдік берілмейді.',
    benefitsEyebrow: 'Студенттер бұл бағдарламаны неге таңдайды',
    benefitsTitle: 'Түйіндемеден де көп пайда беретін жаз',
    benefit1Title: 'Нақты жұмыс тәжірибесі',
    benefit1Text: 'Жазғы демалыста АҚШ-тағы қонақжайлылық және демалыс салаларында маусымдық жұмыс істе.',
    benefit2Title: 'Ағылшын тілін күнделікті тәжірибелеу',
    benefit2Text: 'Әріптестермен және қонақтармен ағылшын тілінде сөйлесіп, өзіңе деген сенімділікті арттыр.',
    benefit3Title: 'Мәдени алмасу',
    benefit3Text: 'Жаңа ортада тұрып, көптеген елден келген студенттермен таныс.',
    benefit4Title: 'Саяхаттауға уақыт',
    benefit4Text: 'Көптеген қатысушы бағдарлама соңындағы уақытты елдің басқа жерлерін аралауға пайдаланады.',
    stepsEyebrow: 'Қатысу кезеңдері',
    stepsTitle: 'Алғашқы сұрақтан сапарға дейін',
    step1Title: 'Талаптарға сәйкестігіңді тексер',
    step1Text: 'Университеттің күндізгі бөлімінде оқитыныңды және бағдарлама талаптарына сай келетініңді тексер.',
    step2Title: 'Кеңес ал',
    step2Text: 'Бағдарлама, шығындар және міндеттерің туралы түсіндіреміз.',
    step3Title: 'Құжаттарды дайында',
    step3Text: 'Студент мәртебең мен ағылшын тілі деңгейіңді растайтын құжаттарды жина.',
    step4Title: 'Жұмыс таңдап, демеуші іріктеуінен өт',
    step4Text: 'Бағдарлама демеушісі белгілеген жұмысқа орналасу рәсімінен өт.',
    step5Title: 'Виза сұхбатына қатыс',
    step5Text: 'Сұхбатқа қатыс. Шешімді АҚШ елшілігі қабылдайды.',
    step6Title: 'Сапар алдындағы нұсқаулыққа қатыс',
    step6Text: 'Сапар, баспана, қауіпсіздік және барған кезде не күтетіні туралы біл.',
    jobsEyebrow: 'Жазғы жұмыс',
    jobsTitle: 'Маусымдық жұмыстардың танымал бағыттары',
    jobsIntro: 'Жиі кездесетін жұмыс түрлерінің мысалдары. Бос орындар маусымға қарай өзгеріп, кепілдік берілмейді.',
    job1Title: 'Қонақүйлер мен курорттар',
    job1Text: 'Қабылдау бөлімі, бөлмелерді жинау, қонақтарға қызмет көрсету.',
    job2Title: 'Мейрамханалар мен кафелер',
    job2Text: 'Даяшы, қонақтарды қарсы алу, асүйге көмектесу, наубайхана жұмысы.',
    job3Title: 'Ойын-сауық саябақтары',
    job3Text: 'Аттракциондарға қызмет көрсету, тамақтану орындары, қонақтарға көмек.',
    job4Title: 'Дүкендер мен кәдесый дүкендері',
    job4Text: 'Кассир, сатушы-кеңесші, тауарларды орналастыру.',
    job5Title: 'Жағажайлар мен демалыс орындары',
    job5Text: 'Жабдықтарды жалға беру, нысандарға қызмет көрсетуге көмектесу.',
    job6Title: 'Аквапарктер мен бассейндер',
    job6Text: 'Қонақтарға қызмет көрсету, тамақтану орындары, техникалық қызметке көмектесу.',
    costsEyebrow: 'Болжалды шығындар',
    costsTitle: 'Бюджетіңді алдын ала жоспарла',
    costsDisclaimerTitle: 'Көрсетілген сандар — шартты мысал.',
    costsDisclaimer: 'Сайтты нақты пайдалану алдында оларды демеушіден және АҚШ үкіметінің ресми дереккөздерінен алынған расталған мәліметтермен ауыстыр.',
    expense: 'Шығын түрі',
    sampleRange: 'Шамамен алынған сома',
    costAgency: 'Агенттік қызметінің ақысы',
    costAgencyValue: '[Ақы мөлшерін енгізіңіз]',
    costSponsor: 'Бағдарлама демеушісінің жарнасы',
    costSponsorValue: '[Демеуші жарнасын енгізіңіз]',
    costVisa: 'АҚШ визасы және SEVIS алымы',
    checkOfficial: 'Ресми дереккөздерді тексеріңіз',
    costFlights: 'Барып-қайту әуе билеттері',
    costHousing: 'Бастапқы баспана мен тамақ шығындары',
    costInsurance: 'Сақтандыру',
    costInsuranceValue: '[Шамамен құнын енгізіңіз]',
    faqEyebrow: 'Сұрақ-жауап',
    faqTitle: 'Жиі қойылатын сұрақтар',
    faq1Title: 'Кім өтінім бере алады?',
    faq1Answer: '<p>Work and Travel USA бағдарламасы жазды АҚШ-та өткізіп, халықаралық жұмыс тәжірибесін жинауды, ағылшын тілін жақсартуды және америкалық мәдениетпен танысуды қалайтын студенттерге арналған.</p><p><strong>Мына талаптарға сай болсаңыз, өтінім бере аласыз:</strong></p><ul><li>АҚШ-тан тыс аккредиттелген жоғары оқу орнында күндізгі бөлімде оқисыз.</li><li>Жасыңыз 18-ге толған.</li><li>Ағылшын тіліңіз күнделікті қарым-қатынас пен жұмыс міндеттерін орындауға жеткілікті.</li><li>Бағдарлама басталғанға дейін университетте кемінде бір семестрді аяқтайсыз.</li><li>Бағдарлама ережелерін сақтауға және бағдарлама аяқталған соң еліңізге оралуға дайынсыз.</li></ul><p class="note"><strong>Маңызды:</strong> қатысу туралы түпкілікті шешім АҚШ демеушісі мен жұмыс берушінің талаптарына, сондай-ақ J-1 визасын алу шарттарына байланысты. Жас, оқу және ағылшын тілі талаптары әртүрлі болуы мүмкін.</p>',
    faq2Title: 'Визаға кепілдік беріле ме?',
    faq2Answer: '<p>Жоқ. Виза туралы шешімді тек АҚШ елшілігі немесе консулдығы қабылдайды. Сұхбатқа дайындалуға көмектесеміз, бірақ нәтижеге кепілдік бере алмаймыз.</p>',
    faq3Title: 'Жұмысқа орналасуға кепілдік беріле ме?',
    faq3Answer: '<p><strong>Жоқ, жұмысқа орналасуға кепілдік берілмейді.</strong> Қатысушыларға лайықты бос орындарды таңдап, жұмысқа қабылдау кезеңдерінен өтуге көмектесеміз. Нақты бос орындардың болуы жұмыс берушілерге және бағдарлама шарттарына байланысты. Жұмысқа түпкілікті орналасу іріктеуден сәтті өтуге және жұмыс беруші талаптарын орындауға байланысты.</p><p>Мақсатымыз — бағдарламаның әр кезеңінде АҚШ-тағы жұмысқа дайындалуға көмектесу.</p>',
    faq4Title: 'Ағылшын тілінің қандай деңгейі қажет?',
    faq4Answer: '<p>Work and Travel USA бағдарламасына қатысу үшін күнделікті қарым-қатынас пен жұмыс міндеттерін орындауға жеткілікті ағылшын тілі қажет.</p><p><strong>Ұсынылатын деңгей — A2–B1 немесе одан жоғары.</strong></p><p>Мыналарды істей білу қажет:</p><ul><li>Жұмыс берушімен және әріптестермен сөйлесу.</li><li>Жұмыс орнындағы нұсқауларды түсіну.</li><li>Сұхбат кезінде қойылған сұрақтарға жауап беру.</li><li>Күнделікті жағдайларда ойын жеткізу.</li></ul><p>Ағылшын тілін мінсіз білу міндетті емес! Ең бастысы — ағылшын тіліндегі сөзді түсініп, өз ойыңды жеткізе білу. Нақты деңгейді демеуші мен жұмыс беруші талаптары анықтайды.</p>',
    faq5Title: 'Қашан бастаған дұрыс?',
    faq5Answer: '<p>Неғұрлым ерте бастасаңыз, соғұрлым жақсы: құжаттарды дайындау, жұмыс табу және сұхбаттан өту уақыт алады. Жазға бірнеше ай қалғанда бастаңыз.</p>',
    contactTitle: 'Өзің туралы айтып бер',
    contactLead: 'Форманы толтыр, әрі қарайғы қадамдар туралы электрондық пошта арқылы жауап береміз.',
    formName: 'Аты-жөні',
    formEmail: 'Электрондық пошта',
    formPhone: 'Телефон / WhatsApp',
    formUniversity: 'Университет және курс',
    formMessage: 'Хабарлама',
    consent: 'SummerWay USA осы өтініш бойынша маған хабарласу үшін деректерімді пайдалана алатынына келісемін.',
    send: 'Жіберу',
    footerDisclaimer: '<strong>SummerWay USA</strong> — веб-дизайн жобасы үшін жасалған ойдан шығарылған агенттік. Ол нақты агенттіктермен, демеушілермен немесе мемлекеттік ұйымдармен байланысты емес.',
    footerConcept: 'SummerWay USA тұжырымдамасы',
    statusRequired: 'Атыңызды және жарамды электрондық пошта мекенжайын енгізіңіз.',
    statusConsent: 'Деректеріңізді пайдалануға келісіміңізді растаңыз.',
    statusSending: 'Жіберілуде…',
    statusSent: 'Рақмет! Хабарламаңыз жіберілді.',
    statusFailed: 'Хабарламаны жіберу мүмкін болмады',
    statusNetwork: 'Желі қатесі'
  }
};

var languageSwitcher = document.getElementById('language-switcher');
var formStatus = document.getElementById('form-status');
var currentStatus = null;

function applyLanguage(language) {
  if (!translations[language]) {
    return;
  }

  activeLanguage = language;
  document.documentElement.lang = language;
  document.title = translations[language].pageTitle;
  document.querySelector('meta[name="description"]').content = translations[language].pageDescription;

  document.querySelectorAll('[data-i18n]').forEach(function (element) {
    element.textContent = translations[language][element.getAttribute('data-i18n')];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
    element.innerHTML = translations[language][element.getAttribute('data-i18n-html')];
  });
  document.querySelectorAll('[data-i18n-content]').forEach(function (element) {
    element.content = translations[language][element.getAttribute('data-i18n-content')];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (element) {
    element.setAttribute('aria-label', translations[language][element.getAttribute('data-i18n-aria')]);
  });

  if (currentStatus) {
    showMessage(currentStatus.type, currentStatus.key, currentStatus.detail);
  }
}

if (languageSwitcher) {
  languageSwitcher.addEventListener('change', function () {
    applyLanguage(languageSwitcher.value);
  });
  languageSwitcher.value = 'ru';
}
applyLanguage('ru');

if (toggle && links) {
  toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ========================================
// 2. Header gets a dark background after scrolling
// ========================================
var header = document.querySelector('.site-header');

function onScroll() {
  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }
}
window.addEventListener('scroll', onScroll);
onScroll();

// ========================================
// 3. Fade-in animation when elements appear on screen
// ========================================
var items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (el) { observer.observe(el); });
} else {
  items.forEach(function (el) { el.classList.add('visible'); });
}

// ========================================
// 4. Footer year
// ========================================
var yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ========================================
// 5. Contact form with Formspree
// ========================================
var FORM_ENDPOINT = 'https://formspree.io/f/xgaaaopq';

var form = document.getElementById('contact-form');
var sendButton = document.getElementById('send-button');

function showMessage(type, key, detail) {
  currentStatus = { type: type, key: key, detail: detail || '' };
  formStatus.className = type;
  formStatus.textContent = translations[activeLanguage][key] + (detail || '');
}

if (form && formStatus && sendButton) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = form.elements['name'].value.trim();
    var email = form.elements['email'].value.trim();
    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    var consent = form.elements['consent'];

    if (!name || !emailOk) {
      showMessage('error', 'statusRequired');
      return;
    }

    if (consent && !consent.checked) {
      showMessage('error', 'statusConsent');
      return;
    }

    sendButton.disabled = true;
    showMessage('info', 'statusSending');

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (response) {
        return response.json().catch(function () { return {}; }).then(function (data) {
          if (response.ok) {
            form.reset();
            showMessage('info', 'statusSent');
          } else {
            var reason = '';
            if (data && data.errors && data.errors.length) {
              reason = ' (' + data.errors.map(function (e) { return e.message; }).join(', ') + ')';
            } else if (data && data.error) {
              reason = ' (' + data.error + ')';
            }
            showMessage('error', 'statusFailed', reason + '. Status: ' + response.status);
          }
        });
      })
      .catch(function (err) {
        showMessage('error', 'statusNetwork', ': ' + err.message);
      })
      .then(function () {
        sendButton.disabled = false;
      });
  });
}

(function () {
  'use strict';

  function money(n) {
    return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // ---------- Toast ----------
  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(text) {
    if (!toast) return;
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 3500);
  }

  // ---------- Floating buttons: demo placeholders ----------
  document.querySelectorAll('.float-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var href = btn.getAttribute('href') || '';
      if (href.indexOf('XXXX') !== -1 || href.indexOf('REPLACE') !== -1) {
        e.preventDefault();
        showToast('Демо: контакт ещё не подключён. Клиент укажет свой номер или аккаунт.');
      }
    });
  });

  // ---------- Budget calculator ----------
  var PRICES = { self: 2800, full: 3500, consular: 185, sevis: 35 };

  var calc = document.getElementById('budget-calc');
  if (calc) {
    var totalEl = document.getElementById('calc-total');
    var listEl = document.getElementById('calc-breakdown');
    var feesEl = document.getElementById('calc-fees');
    var insEl = document.getElementById('calc-insurance');
    var flightsEl = document.getElementById('calc-flights');

    var readNumber = function (el) {
      var v = parseFloat(el.value);
      return isFinite(v) && v > 0 ? v : 0;
    };

    var updateCalc = function () {
      var tariffInput = calc.querySelector('input[name="tariff"]:checked');
      var tariff = tariffInput ? tariffInput.value : 'self';
      var rows = [];
      var total = 0;

      var tariffPrice = PRICES[tariff];
      rows.push(['Тариф ' + (tariff === 'full' ? 'Full' : 'Self'), tariffPrice]);
      total += tariffPrice;

      if (feesEl.checked) {
        rows.push(['Консульский сбор', PRICES.consular]);
        rows.push(['Сбор SEVIS', PRICES.sevis]);
        total += PRICES.consular + PRICES.sevis;
      }
      var ins = readNumber(insEl);
      if (ins > 0) { rows.push(['Страховка', ins]); total += ins; }
      var fl = readNumber(flightsEl);
      if (fl > 0) { rows.push(['Авиабилеты', fl]); total += fl; }

      totalEl.textContent = money(total);
      listEl.innerHTML = '';
      rows.forEach(function (r) {
        var li = document.createElement('li');
        var a = document.createElement('span');
        var b = document.createElement('span');
        a.textContent = r[0];
        b.textContent = money(r[1]);
        li.appendChild(a);
        li.appendChild(b);
        listEl.appendChild(li);
      });
    };

    calc.addEventListener('input', updateCalc);
    calc.addEventListener('change', updateCalc);
    updateCalc();
  }

  // ---------- Eligibility quiz ----------
  var quiz = document.getElementById('eligibility-quiz');
  if (quiz) {
    var submit = document.getElementById('quiz-submit');
    var result = document.getElementById('quiz-result');

    var getAnswer = function (name) {
      var el = quiz.querySelector('input[name="' + name + '"]:checked');
      return el ? el.value : null;
    };

    submit.addEventListener('click', function () {
      var a = {
        q1: getAnswer('q1'), q2: getAnswer('q2'), q3: getAnswer('q3'),
        q4: getAnswer('q4'), q5: getAnswer('q5')
      };

      result.className = 'quiz-result show';
      result.innerHTML = '';

      if (!a.q1 || !a.q2 || !a.q3 || !a.q4 || !a.q5) {
        var err = document.createElement('p');
        err.className = 'quiz-error';
        err.textContent = 'Пожалуйста, ответьте на все 5 вопросов.';
        result.appendChild(err);
        return;
      }

      var issues = [];
      if (a.q1 === 'no') issues.push('Программа рассчитана на студентов очной формы обучения.');
      if (a.q2 === 'no') issues.push('Участнику должно исполниться 18 лет.');
      if (a.q3 === 'no') issues.push('Обычно требуется завершить хотя бы один семестр к началу программы.');
      if (a.q4 === 'a1' || a.q4 === 'unsure') issues.push('Рекомендуемый уровень английского — A2–B1 и выше.');
      if (a.q5 === 'no') issues.push('Участник должен вернуться домой после окончания программы.');

      var title = document.createElement('h3');
      var text = document.createElement('p');
      var link = document.createElement('a');
      link.href = '#contact';
      link.className = 'btn btn-red';

      if (issues.length === 0) {
        result.classList.add('good');
        title.textContent = 'Похоже, вы подходите под основные условия';
        text.textContent = 'Окончательное решение принимает американский спонсор, а визу выдаёт Посольство США. Оставьте заявку, и мы расскажем о следующих шагах.';
        link.textContent = 'Оставить заявку';
        result.appendChild(title);
        result.appendChild(text);
      } else {
        result.classList.add('warn');
        title.textContent = 'Есть моменты, которые стоит обсудить';
        text.textContent = 'По некоторым пунктам могут быть сложности:';
        var ul = document.createElement('ul');
        issues.forEach(function (t) {
          var li = document.createElement('li');
          li.textContent = t;
          ul.appendChild(li);
        });
        var tail = document.createElement('p');
        tail.textContent = 'Это не окончательный вывод: требования зависят от спонсора. Напишите нам, и мы разберём вашу ситуацию.';
        link.textContent = 'Обсудить с консультантом';
        result.appendChild(title);
        result.appendChild(text);
        result.appendChild(ul);
        result.appendChild(tail);
      }
      result.appendChild(link);
    });
  }
})();