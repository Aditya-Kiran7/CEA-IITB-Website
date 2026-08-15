// =============================================================================
//  CEA BLOGS — single source of truth
// -----------------------------------------------------------------------------
//  To add a new blog, just append one object to this array. It automatically:
//    • gets its own page at  /cea/blog/<slug>
//    • appears on the Events page grid
//    • appears on the Blogs listing page
//
//  content blocks:
//    ['h2',   'Section heading']
//    ['p',    'A paragraph of text']
//    ['quote','A highlighted quote']
//    ['ul',   ['item', 'item', { label: 'Bold label:', text: 'rest of item' }]]
// =============================================================================

export const blogs = [
  {
    slug: 'esports',
    title: 'The Ultimate Showdown: Inter-IIT Esports Tournament 2025-26',
    cardTitle: 'Inter-IIT Esports Tournament',
    author: 'Pushkar Yadav',
    authorImage: '/cea/images/Pushkar.jpg',
    date: 'August 04 - 10, 2025',
    tag: 'Esports',
    heroImage: '/cea/images/esportsblog.jpg',
    cardImage: '/cea/images/esports.jpg',
    excerpt:
      'CEA hosted the inaugural Inter-IIT Civil Departments eSports Tournament, bringing together students from 12 IITs for a week of intense competition.',
    highlights: ['BGMI tournament', 'Valorant tournament', 'Clash Royale & Stumble Guys showdowns'],
    content: [
      ['h2', 'Introduction'],
      ['p', `The digital arena came alive as the Civil Engineering Association (CEA) of IIT Bombay successfully hosted the inaugural Inter-IIT Civil Departments eSports Tournament. From July 4th to July 10th, students from 12 IITs across the nation swapped their textbooks for controllers, proving that the spirit of competition extends far beyond the lecture halls. This event was a spectacular display of skill, strategy, and sportsmanship, bringing together the brightest minds in civil engineering for a week of intense gaming action.`],
      ['h2', 'A New Chapter in Inter-IIT Competition'],
      ['p', `Traditionally, inter-IIT events have focused on sports, cultural, and technical fests. However, the CEA of IIT Bombay recognized the growing passion for eSports within the student community. This tournament was a pioneering effort to bridge the gap between academic pursuits and digital entertainment, creating a unique platform for students to connect, compete, and celebrate their shared interests. The overwhelming response, with 12 IITs participating, solidified the event's success and potential for future editions.`],
      ['h2', 'The Games That Defined the Tournament'],
      ['p', `The tournament featured four popular games, carefully selected to cater to different skill sets and preferences. The battlefield was set, and the players were ready to showcase their prowess in:`],
      ['ul', [
        'BGMI (Battlegrounds Mobile India): The high-octane battle royale game where teams fought for survival and supremacy, testing teamwork and individual skill.',
        'VALORANT: A tactical first-person shooter that demanded precision, coordination, and split-second decisions.',
        'CLASH ROYALE: A fast-paced, real-time strategy game where players used their wits and deck-building skills to outsmart opponents.',
        'STUMBLE GUYS: A chaotic and hilarious party knockout game that brought a dose of lighthearted fun to the competition.',
      ]],
      ['h2', 'More Than Just Games'],
      ['p', `While the prize pool of over ₹20,000 was a significant draw, the true victory of this tournament was the sense of community it fostered. Students from different IITs, who may have only known each other through academic conferences, now shared a new bond forged in friendly competition. The CEA of IIT Bombay extends its heartfelt thanks to all the participating IITs and the students who registered — your enthusiasm and sportsmanship made this event a resounding success.`],
      ['h2', 'Looking Ahead'],
      ['p', `The overwhelming success of this tournament marks the beginning of a new tradition. The CEA is already looking forward to future editions, promising even more exciting games, bigger prizes, and wider participation. Congratulations to all the winners and a huge shoutout to every participant. Until next time, let the games continue!`],
    ],
  },
  {
    slug: 'summer-of-code',
    title: 'Summer of Code by CEA 2025',
    cardTitle: 'Summer of Code',
    author: 'Nitesh Patel',
    authorImage: '/cea/images/nitesh.jpg',
    date: 'July 15, 2025',
    tag: 'Workshop',
    heroImage: '/cea/images/socblog.png',
    cardImage: '/cea/images/soc.png',
    excerpt:
      'A look at the Summer of Code initiative that equipped students with hands-on training in industry-standard engineering software.',
    highlights: [
      'Expert-led training in SolidWorks, ETABS & MS Office',
      'Certification, resume building & internship opportunities',
      'Practical, project-based upskilling',
    ],
    content: [
      ['h2', 'Empowering Civil Engineers with Software Skills'],
      ['p', `This summer, the Civil Engineering Association (CEA) Council of IIT Bombay took a leap into the digital learning space with its Summer of Code (SOC) initiative, offering students a unique opportunity to master essential civil engineering software from the comfort of their homes. The program brought together aspiring engineers from across the country, eager to sharpen their technical toolkit with hands-on training in some of the most powerful tools used in the field today.`],
      ['h2', 'A New Era of Learning'],
      ['p', `In an age where technology and engineering are more intertwined than ever, CEA recognized the importance of equipping students with skills that go beyond textbooks. The Summer of Code was designed to bridge the gap between theoretical knowledge and real-world application, offering training in:`],
      ['ul', [
        'ETABS — for structural analysis and design, helping participants model and analyze structures with industry-level precision.',
        'SolidWorks — for 3D modeling and design, bringing creativity and engineering concepts to life.',
        'Microsoft Office Suite (Excel, Word, PowerPoint) — an indispensable set of tools for consulting, finance, research, and core civil engineering applications.',
      ]],
      ['h2', 'Certificates of Achievement'],
      ['p', `One of the program's highlights was its focus on tangible outcomes. Students who successfully completed the workshop and met the learning objectives were awarded certificates, serving as both recognition of their hard work and a valuable addition to their professional portfolio.`],
      ['h2', 'Learning Without Boundaries'],
      ['p', `Beyond technical skills, SOC 2025 fostered a spirit of self-learning and adaptability — qualities essential for any modern engineer. By offering the sessions online, CEA ensured that geographical boundaries were no barrier to learning, allowing students to engage at their own pace while still benefiting from live interaction and guidance.`],
      ['h2', 'Looking Ahead'],
      ['p', `The enthusiastic participation and positive feedback from this year's Summer of Code have set the stage for even bigger editions in the future. The CEA Council is committed to continuing such initiatives, expanding the scope to include more advanced software and real-world projects. To everyone who joined us this summer — congratulations on taking a step towards becoming a more skilled and versatile engineer.`],
    ],
  },
  {
    slug: 'orientation-2025',
    title: 'UG & PG Orientation Programme 2025',
    cardTitle: 'Freshers Orientation',
    author: 'Nitesh Patel',
    authorImage: '/cea/images/nitesh.jpg',
    date: 'August 26, 2025',
    tag: 'Orientation',
    heroImage: '/cea/images/25_oreo_1_ug.jpg',
    cardImage: '/cea/images/oreo.jpeg',
    excerpt:
      'Welcoming the incoming batch to the Civil Engineering Department — its faculty, facilities, and vibrant student community.',
    highlights: [
      'Welcome address by the HoD and faculty',
      'Introduction to CEA and its initiatives',
      'Ice-breaking and networking sessions',
    ],
    content: [
      ['h2', 'Introduction'],
      ['p', `The campus of IIT Bombay came alive with energy and anticipation as the Civil Engineering Department welcomed its new batch of Undergraduate (UG) and Postgraduate (PG) students through the Orientation Programme 2025. This special occasion marked the beginning of an exciting academic journey, where curiosity meets opportunity and ambition takes shape. Faculty, seniors, and student volunteers gathered to guide the incoming students, ensuring their first steps into the institute were both memorable and inspiring.`],
      ['h2', 'A Defining Beginning'],
      ['p', `Orientation has always been more than just a welcome event — it is a foundation for the years ahead. For the fresh batch, this programme symbolized not just entry into IIT Bombay but also the start of a transformative journey filled with challenges, learning, and growth. With the proud presence of professors, mentors, and enthusiastic seniors, the event showcased the department's commitment to nurturing the next generation of engineers, researchers, and leaders.`],
      ['quote', `Orientation is not just about knowing the campus — it's about discovering yourself in a new environment of endless possibilities.`],
      ['h2', 'A Celebration of Community'],
      ['p', `Beyond the structured sessions, the true essence of the programme was the bonds it created. Friendships sparked in ice-breaking games, conversations with seniors over shared experiences, and the collective excitement of stepping into a new chapter gave students a sense of belonging. The orientation was not only about academic preparation but also about building a supportive community that will accompany them throughout their time at IIT Bombay.`],
      ['h2', 'Looking Ahead'],
      ['p', `As the UG and PG students begin their academic journey, they carry with them the guidance, encouragement, and inspiration received during orientation. With access to world-class resources, mentorship, and a vibrant campus life, they are set to explore, innovate, and grow. The Orientation Programme 2025 was not just a welcome — it was a launchpad for students to dream big and achieve more.`],
    ],
  },
  {
    slug: 'convocation-2025',
    title: '63rd Convocation & Departmental Degree Award Function (Class of 2025)',
    cardTitle: 'Convocation 2025',
    author: 'Nitesh Patel',
    authorImage: '/cea/images/nitesh.jpg',
    date: 'August 21, 2025',
    tag: 'Ceremony',
    heroImage: '/cea/images/inviteconvo25.png',
    cardImage: '/cea/images/inviteconvo25.png',
    excerpt:
      'Celebrating the achievements of our graduating students as they begin their professional journeys.',
    highlights: [
      'Graduation ceremony for B.Tech, M.Tech and Ph.D. students',
      'Address by the distinguished chief guest and faculty',
      'Celebration of academic excellence',
    ],
    content: [
      ['h2', 'Introduction'],
      ['p', `The campus of IIT Bombay stood tall in pride and celebration as the Civil Engineering Department hosted its Convocation Ceremony for the academic year 2025–26. On this momentous day, graduating students donned their robes and caps, marking the culmination of years of hard work, perseverance, and innovation. Families, friends, faculty, and alumni gathered to witness this milestone, where academic achievements met the promise of future endeavors.`],
      ['h2', 'A Defining Moment'],
      ['p', `Convocation has always been more than just a formal ceremony — it is a bridge between the academic world and professional life. For the graduating class of 2025–26, this event symbolized not just the end of an academic chapter but also the beginning of a lifelong journey of engineering excellence. With the proud presence of esteemed faculty members, industry leaders, and a distinguished chief guest, the ceremony highlighted IIT Bombay's legacy of shaping leaders in civil engineering.`],
      ['quote', `Graduation is not the end — it's the beginning of taking responsibility to build, innovate, and inspire.`],
      ['h2', 'Timeline of the Convocation'],
      ['p', `The ceremony was filled with inspiring moments that will be etched in the memories of all who attended:`],
      ['ul', [
        { label: 'Graduation Ceremony:', text: 'Degrees were conferred upon B.Tech, M.Tech, and Ph.D. students, honoring their dedication and academic excellence.' },
        { label: "Chief Guest's Address:", text: 'The keynote speech, delivered by a renowned figure from the civil engineering industry, motivated students to lead with innovation and integrity.' },
        { label: 'Recognition of Excellence:', text: 'Special awards were presented to outstanding students for academic achievements, research contributions, and leadership.' },
      ]],
      ['h2', 'A Celebration of Community'],
      ['p', `Beyond the awards and speeches, the true essence of the convocation was the spirit of community it fostered. Students who had shared countless lectures, labs, late-night project discussions, and cultural festivities came together one last time as a batch. The joy of accomplishment was beautifully interwoven with the bittersweet emotions of farewell.`],
      ['h2', 'Building the Future'],
      ['p', `As the graduates step into the world, they carry with them not only the knowledge and skills imparted by IIT Bombay but also the responsibility to contribute meaningfully to society. From sustainable infrastructure to cutting-edge research, their journeys will shape the built environment of tomorrow.`],
    ],
  },
  {
    slug: 'traditional-day',
    title: 'Traditional Day: A Celebration of Culture and Colours',
    cardTitle: 'Traditional Day',
    author: 'Nitesh Patel',
    authorImage: '/cea/images/nitesh.jpg',
    date: 'March 2024',
    tag: 'Cultural',
    heroImage: '/cea/images/3_t_1.jpeg',
    cardImage: '/cea/images/3_t_1.jpeg',
    excerpt:
      'The department came together in vibrant traditional attire to celebrate the rich cultural diversity that defines our community.',
    highlights: ['Ethnic attire showcase', 'Department group photograph', 'Cultural exchange and bonding'],
    content: [
      ['h2', 'Introduction'],
      ['p', `Amid a sea of vibrant ethnic wear and warm smiles, the Civil Engineering Department came together to celebrate Traditional Day — a day dedicated to honouring the rich cultural diversity that defines our community. Organised by the Civil Engineering Association (CEA), the event transformed the campus into a canvas of colours, where students and faculty alike embraced the traditions that make our department feel like a family.`],
      ['h2', 'A Tapestry of Cultures'],
      ['p', `From crisp kurtas and elegant sarees to regional attire representing every corner of the country, Traditional Day was a beautiful reminder of how unity and diversity coexist at IIT Bombay. Students proudly showcased the customs of their home states, turning casual conversations into cultural exchanges. The atmosphere was relaxed yet spirited, offering everyone a welcome break from the usual academic routine.`],
      ['h2', 'Highlights of the Day'],
      ['p', `The celebration was filled with moments that brought everyone closer together:`],
      ['ul', [
        'A grand group photograph capturing the entire department in traditional attire.',
        'Informal cultural showcases where students shared stories behind their outfits.',
        'Candid interactions between juniors, seniors, and faculty in a festive setting.',
      ]],
      ['h2', 'More Than Just an Event'],
      ['p', `Beyond the photographs and festivities, Traditional Day carried a deeper meaning. It reinforced the sense of belonging that the CEA strives to nurture, reminding us that engineering is not only about equations and structures, but also about the people and shared experiences that build lasting bonds.`],
      ['h2', 'Looking Ahead'],
      ['p', `As the day drew to a close, it left behind cherished memories and a renewed appreciation for our collective heritage. The CEA looks forward to hosting many more such celebrations, keeping alive the traditions that make our department vibrant, inclusive, and united.`],
    ],
  },
  {
    slug: 'teachers-day',
    title: "Teachers' Day: Honouring Our Mentors",
    cardTitle: "Teachers' Day",
    author: 'Nitesh Patel',
    authorImage: '/cea/images/nitesh.jpg',
    date: 'September 05, 2024',
    tag: 'Celebration',
    heroImage: '/cea/images/td_1_25.jpg',
    cardImage: '/cea/images/td_1_25.jpg',
    excerpt:
      'A heartfelt tribute to the professors and faculty whose guidance shapes our academic journey at IIT Bombay.',
    highlights: [
      'Messages of gratitude from students',
      'Interactive sessions with faculty',
      'Tokens of appreciation',
    ],
    content: [
      ['h2', 'Introduction'],
      ['p', `Behind every successful engineer stands a mentor who shaped their thinking, challenged their ideas, and believed in their potential. On Teachers' Day, the Civil Engineering Association (CEA) came together to express heartfelt gratitude to the professors and faculty members whose guidance continues to define our academic journey.`],
      ['h2', 'A Day of Gratitude'],
      ['p', `The celebration was a warm and sincere tribute to the educators of the Civil Engineering Department. Students organised a thoughtful programme to honour the faculty — not just for the knowledge they impart in classrooms and laboratories, but for the mentorship, encouragement, and support they offer well beyond the syllabus.`],
      ['h2', 'Highlights of the Celebration'],
      ['p', `The day was marked by several memorable moments:`],
      ['ul', [
        'Heartfelt speeches and messages of appreciation from students.',
        'Interactive sessions where faculty shared experiences and words of wisdom.',
        'Small tokens of gratitude presented to the professors on behalf of the department.',
      ]],
      ['h2', 'The Bond Between Students and Faculty'],
      ['p', `What made the occasion truly special was the genuine connection on display. The relationship between students and teachers at IIT Bombay extends far beyond academics — it is built on trust, respect, and a shared pursuit of excellence. Teachers' Day was a reminder of just how deeply that bond runs.`],
      ['h2', 'A Note of Thanks'],
      ['p', `To every professor and mentor who has patiently guided us, inspired us, and pushed us to be better — thank you. The CEA remains committed to celebrating the educators who lay the foundation for the next generation of civil engineers.`],
    ],
  },
  {
    slug: 'valedictory',
    title: 'Valedictory Function: A Fond Farewell to the Graduating Batch',
    cardTitle: 'Valedictory Function',
    author: 'Nitesh Patel',
    authorImage: '/cea/images/nitesh.jpg',
    date: 'April 2023',
    tag: 'Farewell',
    heroImage: '/cea/images/3_v_1.jpg',
    cardImage: '/cea/images/3_v_1.jpg',
    excerpt:
      'A graceful send-off for the graduating batch, celebrating their achievements and the bonds formed along the way.',
    highlights: [
      'Addresses by faculty members',
      'Memories from graduating students',
      'Recognition of contributions',
    ],
    content: [
      ['h2', 'Introduction'],
      ['p', `Every journey has a destination, and for the graduating batch of the Civil Engineering Department, the Valedictory Function marked a heartfelt culmination of years spent learning, growing, and building lifelong friendships. Hosted by the Civil Engineering Association (CEA), the evening was a graceful blend of nostalgia, celebration, and hope for the future.`],
      ['h2', 'Celebrating Achievements'],
      ['p', `The function brought together students, faculty, and staff to honour the accomplishments of the outgoing batch. From academic milestones to contributions in sports, culture, and departmental initiatives, the evening recognised the many ways in which these students left their mark on the department.`],
      ['h2', 'Moments to Remember'],
      ['p', `The evening was rich with emotion and celebration:`],
      ['ul', [
        'Warm addresses by faculty members reflecting on the batch\u2019s journey.',
        'Heartfelt speeches and shared memories from graduating students.',
        'Recognition of outstanding contributions and a toast to new beginnings.',
      ]],
      ['h2', 'A Bittersweet Goodbye'],
      ['p', `There is a certain bittersweetness to farewells — the pride of accomplishment intertwined with the sadness of parting ways. Yet, the Valedictory Function reminded everyone that while campus life may end, the bonds formed here endure. Classmates became lifelong friends, and mentors became well-wishers for the road ahead.`],
      ['h2', 'Onward and Upward'],
      ['p', `As the graduating batch steps into the professional world, they carry with them the values, knowledge, and memories nurtured at IIT Bombay. The CEA extends its warmest wishes to every graduate — may you build not just structures, but a future defined by integrity, innovation, and excellence.`],
    ],
  },
];

export const getBlog = (slug) => blogs.find((b) => b.slug === slug);
