import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const pages = [
      {
        id: 1,
        name: "header",
        tagline: "What does it mean when a person is neurodivergent",
        paragraph1:
          "The term “neurodivergent” describes people whose brain differences affect how their brain works. That means they have different strengths and challenges from people whose brains don’t have those differences. The possible differences include medical disorders, learning disabilities and other conditions. The possible strengths include better memory, being able to mentally picture three-dimensional (3D) objects easily, the ability to solve complex mathematical calculations in their head, and many more.",
        paragraph2:  "Neurodivergent isn’t a medical term. Instead, it’s a way to describe people using words other than “normal” and “abnormal.” That’s important because there’s no single definition of “normal” for how the human brain works.",
        paragraph3: "The word for people who aren’t neurodivergent is “neurotypical.” That means their strengths and challenges aren't affected by any kind of difference that changes how their brains work.",
        source: "Cleveland Clinic Definition of Neurodivergent",
        url: "https://my.clevelandclinic.org/health/symptoms/23154-neurodivergent",
      },
      {
        id: 2,
        header: "Individuals Who Are Neurodivergent",
        description:
          "Neurodivergent looks differently for a lot of people, and unfortunately is it usually looked at negatively \n" +
          "in society today. This page is looking to provide resources to help individuals understand their rights \n" +
          "and find ways to help educate themselves and more importantly others.",
        name: "Individuals",
        tagline: "Individuals",
        title: "The need for Resources",
      },
      {
        id: 3,
        header: "Families With Neurodivergent Members",
        description:
          "Understanding family members who are neurodivergent is critical to communicating with them and helping \n" +
          "them navigate life. The resources on this page are meant to help you understand, teach others, and \n" +
          "stand up for your family members rights.",
        name: "clients",
        tagline: "TRUST",
        title: "Companies who use our services",
      },
      {
        id: 4,
        header: "Schools With Neurodivergent Students",
        description:
          "Working with students can be challenging in general, but understanding students who are neurodivergent \n" +
          "can challenge the best teachers and school administration. This page is to help provide resources that \n" +
          "will help school staff find techniques to communicate better and teach more effectively for those \n" +
          "individuals.",
        name: "families",
        tagline: "BELIEVING",
        title: "Focusing On What Matters Most",
      },
      {
        id: 5,
        header: "Employers With Neurodivergent Employees",
        description:
          "Working with people can be challenging in general, but working people who are neurodivergent can be \n" +
          "hard if the employees, especially managers, are not trained or educated on the topic. This page is to help \n" +
          "provide resources that will help a company to train employees and provide a friendlier work environment \n" +
          "for individuals who are neurodiverse.",
        name: "testimonials",
        tagline: "FEEDBACK",
        title: "What our customers are saying",
      },
      {
        id: 6,
        name: "footer",
        tagline: "Created by: ",
        developer: "Stephen McFarlane",
        developerlink: "",
      },
      {
        id: 7,
        name: "intro",
        tagline: "Neurodiversity",
        paragraph1: "Neurodiversity is a concept that refers to the natural variation in human neurological function. It recognizes that differences in the way our brains work are not necessarily deficits, but rather represent unique ways of thinking and processing information.",
        paragraph2: "Neurodiverse individuals include those who have been diagnosed with conditions such as autism spectrum disorder (ASD), attention deficit hyperactivity disorder (ADHD), dyslexia, dyspraxia, Tourette syndrome, and others. These conditions are often referred to as neurodevelopmental disorders, as they affect the development and function of the nervous system.",
        paragraph3: "Neurodiverse individuals may have strengths in areas that neurotypical individuals do not, such as exceptional attention to detail, creativity, and problem-solving abilities. However, they may also face challenges in areas such as communication, social interaction, and executive function.",
        paragraph4: "It is important to recognize and value neurodiversity, as it promotes the idea that everyone has unique strengths and perspectives that can contribute to society in meaningful ways. Instead of viewing neurodiverse individuals as needing to be fixed or cured, society can work to accommodate their needs and create a more inclusive environment for all individuals.",
        paragraph5: "Some ways to support neurodiverse individuals include providing accommodations in the workplace and in educational settings, promoting acceptance and understanding through education and awareness campaigns, and advocating for policies and laws that protect the rights of neurodiverse individuals.",
        paragraph6: "Overall, understanding and embracing neurodiversity can lead to a more inclusive and accepting society that values the contributions of all individuals, regardless of their neurological differences.",
      }
    ];
    const individualNeurodivergences = [
      {
        id: 1,
        title: "Autism Spectrum Disorder (ASD)",
        description1: "Autism Spectrum Disorder (ASD) is considered neurodiverse because it represents a variation in neurological function that is different from what is typically seen in the population. People with ASD have differences in the way their brain processes and responds to information, which can result in challenges with communication, social interaction, and repetitive behaviors or interests.",
        description2: "However, autism is not a disease or a disorder that needs to be cured. Instead, it is a natural variation in the way the brain works that can confer unique strengths and abilities. For example, individuals with ASD may have exceptional attention to detail, strong problem-solving skills, and a deep interest in certain topics,",
        description3: "Furthermore, the autism spectrum is broad, and individuals with ASD can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe autism, as it acknowledges the wide range of experiences and abilities that people with ASD can have.",
        description4: "Overall, viewing autism as neurodiverse acknowledges and values the unique experiences and abilities of individuals with ASD, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 2,
        title: "Attention Deficit Hyperactivity Disorder (ADHD)",
        description1: "Attention Deficit Hyperactivity Disorder (ADHD) is considered neurodiverse because it represents a variation in neurological function that is different from what is typically seen in the population. People with ADHD have differences in the way their brain processes and regulates attention, impulsivity, and activity level, which can result in challenges with organization, time management, and hyperactivity.",
        description2: "However, ADHD is not a disease or a disorder that needs to be cured. Instead, it is a natural variation in the way the brain works that can confer unique strengths and abilities. For example, individuals with ADHD may have high energy and be highly creative, with the ability to think outside the box and generate new ideas.",
        description3: "Furthermore, the ADHD spectrum is broad, and individuals with ADHD can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe ADHD, as it acknowledges the wide range of experiences and abilities that people with ADHD can have.",
        description4: "Overall, viewing ADHD as neurodiverse acknowledges and values the unique experiences and abilities of individuals with ADHD, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 3,
        title: "Dyslexia",
        description1: "Dyslexia is considered neurodiverse because it represents a natural variation in the way the brain processes language and written information. Individuals with dyslexia have differences in the way their brain processes and responds to information, which can result in challenges with reading, writing, spelling, and sometimes with oral language.",
        description2: "However, dyslexia is not a disease or a disorder that needs to be cured. Instead, it is a unique way of thinking that can confer unique strengths and abilities. For example, individuals with dyslexia may have strong creative and problem-solving skills, and they may be able to think and understand complex information in unique ways.",
        description3: "Furthermore, the dyslexia spectrum is broad, and individuals with dyslexia can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe dyslexia, as it acknowledges the wide range of experiences and abilities that people with dyslexia can have.",
        description4: "Overall, viewing dyslexia as neurodiverse acknowledges and values the unique experiences and abilities of individuals with dyslexia, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 4,
        title: "Dyspraxia",
        description1: "Dyspraxia is considered neurodiverse because it represents a natural variation in the way the brain processes and plans physical movements. Individuals with dyspraxia have differences in the way their brain processes and responds to sensory information, which can result in challenges with coordination, planning and executing physical movements, and learning new motor skills.",
        description2: "However, dyspraxia is not a disease or a disorder that needs to be cured. Instead, it is a unique way of thinking that can confer unique strengths and abilities. For example, individuals with dyspraxia may have strong creativity, problem-solving skills, and may excel in areas such as music, art, and design.",
        description3: "Furthermore, the dyspraxia spectrum is broad, and individuals with dyspraxia can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe dyspraxia, as it acknowledges the wide range of experiences and abilities that people with dyspraxia can have.",
        description4: "Overall, viewing dyspraxia as neurodiverse acknowledges and values the unique experiences and abilities of individuals with dyspraxia, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 5,
        title: "Tourette Syndrome (TS)",
        description1: "Tourette Syndrome (TS) is considered neurodiverse because it represents a natural variation in the way the brain processes and regulates movement and speech. TS is a neurological condition that is characterized by involuntary movements or vocalizations called tics.",
        description2: "Individuals with TS have differences in the way their brain processes and responds to signals related to movement and speech, which can result in tics. However, TS is not a disease or a disorder that needs to be cured. Instead, it is a unique way of thinking that can confer unique strengths and abilities. For example, individuals with TS may have exceptional abilities in areas such as creativity, problem-solving, and lateral thinking.",
        description3: "Furthermore, the TS spectrum is broad, and individuals with TS can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe TS, as it acknowledges the wide range of experiences and abilities that people with TS can have.",
        description4: "Overall, viewing TS as neurodiverse acknowledges and values the unique experiences and abilities of individuals with TS, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 6,
        title: "Obsessive-Compulsive Disorder (OCD)",
        description1: "Obsessive-Compulsive Disorder (OCD) is considered neurodiverse because it represents a natural variation in the way the brain processes and responds to intrusive thoughts and feelings. OCD is a mental health condition that is characterized by intrusive, distressing thoughts or images (obsessions) that lead to repetitive, ritualistic behaviors or mental acts (compulsions).",
        description2: "Individuals with OCD have differences in the way their brain processes and responds to signals related to obsessive thoughts and compulsive behaviors. However, OCD is not a disease or a disorder that needs to be cured. Instead, it is a unique way of thinking that can confer unique strengths and abilities. For example, individuals with OCD may have strong attention to detail, excellent organizational skills, and the ability to think critically and creatively.",
        description3: "Furthermore, the OCD spectrum is broad, and individuals with OCD can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe OCD, as it acknowledges the wide range of experiences and abilities that people with OCD can have.",
        description4: "Overall, viewing OCD as neurodiverse acknowledges and values the unique experiences and abilities of individuals with OCD, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 7,
        title: "Dyscalculia",
        description1: "Dyscalculia is considered neurodiverse because it represents a natural variation in the way the brain processes and understands numerical and mathematical information. Dyscalculia is a specific learning difficulty that affects an individual's ability to acquire basic arithmetic skills, understand mathematical concepts, and perform mathematical calculations.",
        description2: "Individuals with dyscalculia have differences in the way their brain processes and responds to numerical information, which can result in challenges with basic arithmetic skills, mathematical reasoning, and mathematical problem-solving. However, dyscalculia is not a disease or a disorder that needs to be cured. Instead, it is a unique way of thinking that can confer unique strengths and abilities. For example, individuals with dyscalculia may excel in areas such as creativity, problem-solving, and lateral thinking.",
        description3: "Furthermore, the dyscalculia spectrum is broad, and individuals with dyscalculia can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe dyscalculia, as it acknowledges the wide range of experiences and abilities that people with dyscalculia can have.",
        description4: "Overall, viewing dyscalculia as neurodiverse acknowledges and values the unique experiences and abilities of individuals with dyscalculia, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 8,
        title: "Synesthesia",
        description1: "Synesthesia is considered neurodiverse because it represents a natural variation in the way the brain processes and perceives sensory information. Synesthesia is a neurological condition that causes individuals to experience a blending or mixing of sensory modalities, where one sensory experience can trigger another. \n" +
          "For example, someone with synesthesia may perceive colors when listening to music, or associate certain letters or numbers with specific colors or shapes. This blending of sensory modalities is thought to occur due to an increased cross-activation between different areas of the brain responsible for processing different sensory information.",
        description2: "However, synesthesia is not a disease or a disorder that needs to be cured. Instead, it is a unique way of experiencing the world that can confer unique strengths and abilities. For example, individuals with synesthesia may have enhanced creativity and a unique perspective on the world.",
        description3: "Furthermore, the synesthesia spectrum is broad, and individuals with synesthesia can have a wide range of experiences and abilities. This diversity is why the term \"spectrum\" is used to describe synesthesia, as it acknowledges the wide range of experiences and abilities that people with synesthesia can have.",
        description4: "Overall, viewing synesthesia as neurodiverse acknowledges and values the unique experiences and abilities of individuals with synesthesia, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 9,
        title: "Nonverbal Learning Disorder (NVLD)",
        description1: "Nonverbal Learning Disorder (NVLD) is considered neurodiverse because it represents a natural variation in the way the brain processes and interprets nonverbal information. NVLD is a neurological condition that affects an individual's ability to understand and process nonverbal cues, such as facial expressions, body language, and social cues.",
        description2: "Individuals with NVLD have differences in the way their brain processes and responds to nonverbal information, which can result in challenges with social interaction, spatial perception, motor coordination, and visual-spatial tasks. However, NVLD is not a disease or a disorder that needs to be cured. Instead, it is a unique way of thinking that can confer unique strengths and abilities. For example, individuals with NVLD may have strong verbal skills, excellent memory for facts and details, and the ability to think creatively and critically.",
        description3: "Furthermore, the NVLD spectrum is broad, and individuals with NVLD can have a wide range of abilities and challenges. This diversity is why the term \"spectrum\" is used to describe NVLD, as it acknowledges the wide range of experiences and abilities that people with NVLD can have.",
        description4: "Overall, viewing NVLD as neurodiverse acknowledges and values the unique experiences and abilities of individuals with NVLD, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
      {
        id: 10,
        title: "Sensory Processing Disorder (SPD)",
        description1: "Sensory Processing Disorder (SPD) is considered neurodiverse because it represents a natural variation in the way the brain processes and responds to sensory information. SPD is a neurological condition that affects an individual's ability to process and integrate sensory information from the environment and their own body.",
        description2: "Individuals with SPD have differences in the way their brain processes and responds to sensory information, which can result in challenges with processing and responding to sensory input, such as touch, sound, smell, taste, and movement. These challenges can result in difficulties with daily activities, social interactions, and emotional regulation. However, SPD is not a disease or a disorder that needs to be cured. Instead, it is a unique way of experiencing the world that can confer unique strengths and abilities. For example, individuals with SPD may have heightened sensory awareness and sensitivity, and the ability to detect and respond to changes in their environment that others may not notice.",
        description3: "Furthermore, the SPD spectrum is broad, and individuals with SPD can have a wide range of experiences and abilities. This diversity is why the term \"spectrum\" is used to describe SPD, as it acknowledges the wide range of experiences and abilities that people with SPD can have.",
        description4: "Overall, viewing SPD as neurodiverse acknowledges and values the unique experiences and abilities of individuals with SPD, and promotes a more inclusive and accepting society that recognizes and supports the contributions of neurodiverse individuals.",
      },
    ];
    const familiesNeurodivergences = [
      {
        id: 1,
        title: "There are several ways in which family members can help family members who are neurodiverse:",
        numberlist1: "    1. Educate themselves: It's important for family members to educate themselves about the neurodiverse condition that their family member has. This will help them better understand the challenges that their family member may be facing, and the ways in which they can best support them,",
        numberlist2: "    2. Be patient and understanding: Family members should be patient and understanding with their neurodiverse family member. They may have different communication styles, and may require more time to process information or complete tasks. It's important to avoid getting frustrated or angry, and to instead offer support and encouragement.",
        numberlist3: "    3. Advocate for their needs: Family members can advocate for their neurodiverse family member's needs. This may include communicating with healthcare providers, educators, and other service providers to ensure that their family member is receiving the appropriate support and accommodations.",
        numberlist4: "    4. Provide a safe and supportive environment: Family members can provide a safe and supportive environment for their neurodiverse family member. This may involve creating a predictable routine, providing sensory accommodations, or setting up a quiet space where their family member can go to when feeling overwhelmed.",
        numberlist5: "    5. Encourage independence: Family members can encourage independence by providing opportunities for their neurodiverse family member to practice skills and make decisions on their own. This can help build confidence and self-esteem, and help them develop the skills they need to live independently.",
        conclusion: "Overall, the most important thing that family members can do to support their neurodiverse family member is to be patient, understanding, and supportive. By working together, they can help their family member lead a fulfilling and successful life.",
      }
    ];
    const schoolsNeurodivergences = [
      {
        id: 1,
        title: "Schools can help students who are neurodiverse and educate other students in several ways:",
        numberlist1: "1. Provide accommodations: Schools can provide accommodations such as extended time on assignments, sensory-friendly environments, and assistive technology to help neurodiverse students succeed academically.",
        numberlist2: "2. Offer specialized support: Schools can offer specialized support such as counseling services, social skills groups, and occupational therapy to help neurodiverse students navigate the social and emotional challenges of school.",
        numberlist3: "3. Train teachers and staff: Schools can train teachers and staff to better understand the needs of neurodiverse students and provide appropriate accommodations and support.",
        numberlist4: "4. Foster inclusion and acceptance: Schools can foster inclusion and acceptance by promoting diversity and educating students about neurodiversity. This can be done through classroom discussions, school-wide events, and by providing resources to students and families.",
        numberlist5: "5. Create peer support programs: Schools can create peer support programs where neurodiverse students can connect with other students and receive support and mentorship from older students.",
        conclusion: "Overall, schools can play a critical role in supporting neurodiverse students and educating other students about neurodiversity. By creating a supportive and inclusive environment, schools can help all students succeed academically, socially, and emotionally.",
      }
    ];
    const employersNeurodivergences = [
      {
        id: 1,
        title: "Employers can take several steps to make the interviewing process more accessible and inclusive for candidates who are neurodiverse. Here are some suggestions:",
        numberlist1: "1. Create a welcoming environment: Ensure that the interview location is quiet, well-lit, and free of distractions. Consider the sensory needs of neurodiverse candidates, such as providing noise-cancelling headphones or adjusting lighting levels.",
        numberlist2: "2. Provide clear communication: Use plain language and avoid jargon, idioms, or sarcasm, which can be confusing for individuals with neurodiverse conditions. Allow extra time for candidates to process questions and provide them with written instructions or visual aids, if necessary.",
        numberlist3: "3. Offer accommodations: Be open to providing accommodations such as extra time, breaks, or alternative interview formats, such as video or phone interviews. Allow candidates to bring a support person or advocate with them to the interview if they request it.",
        numberlist4: "4. Train interviewers: Provide training to interviewers on how to recognize and support neurodiverse candidates. This can include information on common neurodiverse conditions, communication strategies, and how to provide accommodations.",
        numberlist5: "5. Focus on skills and strengths: Avoid asking questions that rely heavily on social skills or assume a specific way of thinking. Instead, focus on the candidate's skills, experiences, and strengths relevant to the position.",
        conclusion: "By taking these steps, employers can create a more inclusive and accessible interviewing process for candidates who are neurodiverse.",
      },
      {
        id: 2,
        title: "Employers can take several steps to create a more inclusive and supportive workplace environment for employees who are neurodiverse. Here are some suggestions:",
        numberlist1: "1. Provide clear expectations and instructions: Use clear and concise language when communicating expectations and instructions, and avoid using ambiguous or figurative language that may be confusing for individuals with neurodiverse conditions.",
        numberlist2: "2. Offer accommodations: Provide accommodations such as flexible work hours, noise-cancelling headphones, and other tools and technologies that can help employees with neurodiverse conditions perform their job duties effectively.",
        numberlist3: "3. Foster an inclusive workplace culture: Train managers and colleagues on neurodiversity, and encourage them to create a supportive and accepting workplace culture. This can include promoting respectful and inclusive language, avoiding stigmatizing or discriminatory behavior, and recognizing and valuing the strengths of neurodiverse employees.",
        numberlist4: "4. Provide mentorship and support: Offer mentorship programs and support groups for neurodiverse employees, as well as opportunities for career development and advancement.",
        numberlist5: "5. Consider sensory needs: Take steps to address sensory needs, such as providing quiet workspaces, adjustable lighting, and ergonomic furniture.",
        conclusion: "By taking these steps, employers can create a more inclusive and supportive workplace environment for employees who are neurodiverse, which can help them be more comfortable and successful in their roles.",
      }
    ];
    const individualResources = [
      {
        id: 1,
        title: "Neurodiversity Network",
        subtitle: "Neurodivergent Strengths",
        description:
          "This site enables a person to identify which neurodivergent strenghts one\n" +
          "has and to take an assessment to understand interests and skills. This can\n" +
          "help identify which careers might work for you.",
        url: "https://www.neurodiversitynetwork.net/neurodivergent-strengths",
      },
      {
        id: 2,
        title: "ADHD Coaches Organization",
        description:
          "Provides resources and training for ADHD coaches and connects individuals with coaches who can help them manage their condition.",
        url: "https://www.adhdcoaches.org",
      },
      {
        id: 3,
        title: "National Alliance on Mental Illness (NAMI)",
        description:
          "Provides support and resources for individuals with mental health conditions, including those who are neurodiverse.",
        url: "https://www.nami.org",
      },
      {
        id: 4,
        title: "Autism Society",
        description:
          "Provides support, resources, and advocacy for individuals with autism and their families.",
        url: "https://www.autism-society.org/",
      },
      {
        id: 5,
        title: "Asperger/Autism Network (AANE)",
        description:
          "Provides support and resources for individuals with Asperger's and autism, as well as their families and professionals.",
        url: "https://www.aane.org/",
      },
      {
        id: 6,
        title: "The Arc",
        description:
          "Provides advocacy and support for individuals with intellectual and developmental disabilities, including those who are neurodiverse.",
        url: "https://thearc.org",
      },
      {
        id: 7,
        title: "CHADD",
        description:
          "Provides support and resources for individuals with ADHD and their families, including information on treatment options and support groups.",
        url: "https://chadd.org",
      },
      {
        id: 8,
        title: "Dyslexia Action",
        description:
          "Provides support and resources for individuals with dyslexia, including assessment and tutoring services.",
        url: "https://dyslexiaaction.org.uk",
      },
      {
        id: 9,
        title: "Tourette Association of America",
        description:
          "Provides support and resources for individuals with Tourette syndrome and their families, including education, advocacy, and research.",
        url: "https://tourette.org",
      },
      {
        id: 10,
        title: "International Dyslexia Association (IDA)",
        description:
          "Provides resources and support for individuals with dyslexia and their families, including information on research, advocacy, and education.",
        url: "https://dyslexiaida.org",
      },
    ];
    const familyResources = [
      {
        id: 1,
        title: "Family Support Network",
        description: "Provides support and resources for families of individuals with disabilities, including those who are neurodiverse.",
        url: "https://fsnnc.org",
      },
      {
        id:2,
        title: "CHADD",
        description: "Provides support and resources for families of individuals with ADHD, including information on treatment options and support groups.",
        url: "https://chadd.org",
      },
      {
        id:3,
        title: "National Fragile X Foundation",
        description: "Provides support and resources for families of individuals with Fragile X syndrome, a genetic condition that can cause intellectual disability and other challenges.",
        url: "https://fragilex.org",
      },
      {
        id:4,
        title: "National Down Syndrome Society",
        description: "Provides support and resources for families of individuals with Down syndrome, including education, advocacy, and research.",
        url: "https://www.ndss.org",
      },
      {
        id:5,
        title: "Learning Disabilities Association of America",
        description: "Provides support and resources for families of individuals with learning disabilities, including information on assessment, tutoring, and advocacy.",
        url: "https://ldaamerica.org",
      },
      {
        id:6,
        title: "Child Mind Institute",
        description: "Provides resources and support for families of children with mental health and learning disorders, including information on diagnosis, treatment, and support.",
        url: "https://childmind.or",
      },
    ];
    const schoolResources = [
      {
        id: 1,
        title: "National Center for Learning Disabilities",
        description: "Provides resources and support for students with learning disabilities and their families, including information on accommodations, advocacy, and legal rights.",
        url: "https://www.ncld.org",
      },
      {
        id:2,
        title: "Understood",
        description: "Provides resources and support for students with learning and attention issues and their families, including information on accommodations, technology tools, and social and emotional support. ",
        url: "https://www.understood.org/",
      },
      {
        id:3,
        title: "Autism Speaks",
        description: "Provides resources and support for students with autism and their families, including information on education, advocacy, and research.",
        url: "https://www.autismspeaks.org",
      },
      {
        id:4,
        title: "The Asperger/Autism Network (AANE)",
        description: "Provides resources and support for students with Asperger's and autism, as well as their families and professionals.",
        url: "https://www.aane.org",
      },
      {
        id:5,
        title: "ADHD Coaches Organization",
        description: "Provides resources and training for ADHD coaches and connects students with coaches who can help them manage their condition.",
        url: "https://www.adhdcoaches.org",
      },
      {
        id:6,
        title: "Council for Exceptional Children",
        description: "Provides resources and support for students with disabilities and their families, including information on special education, assistive technology, and professional development.",
        url: "https://www.cec.sped.org",
      },
      {
        id:7,
        title: "International Dyslexia Association (IDA)",
        description: "Provides resources and support for students with dyslexia and their families, including information on assessment, tutoring, and advocacy.",
        url: "https://dyslexiaida.org",
      },
      {
        id:8,
        title: "National Association of School Psychologists",
        description: "Provides resources and support for school psychologists and other professionals who work with students with disabilities, including information on assessment, intervention, and advocacy.",
        url: "https://www.nasponline.org",
      },
    ];
    const employerResources = [
      {
        id: 1,
        title: "Neurodiversity in the Workplace",
        description: "Provides information and resources for employers on hiring and supporting neurodiverse employees.",
        url: "https://www.neurodiversityatwork.com",
      },
      {
        id:2,
        title: "Autism Speaks Employer Tool Kit",
        description: "Provides resources for employers on hiring and accommodating employees with autism, including sample job descriptions, interview questions, and accommodations.",
        url: "https://www.autismspeaks.org/tool-kit/employment-tool-kit",
      },
      {
        id:3,
        title: "National Organization on Disability (NOD)",
        description: "Provides resources and support for employers on hiring and accommodating individuals with disabilities, including those who are neurodiverse.",
        url: "https://www.nod.org",
      },
      {
        id:4,
        title: "Job Accommodation Network (JAN)",
        description: "Provides resources for employers on accommodating employees with disabilities, including those who are neurodiverse.",
        url: "https://askjan.org",
      },
      {
        id:5,
        title: "Disability:IN",
        description: "Provides resources and support for employers on hiring and accommodating individuals with disabilities, including those who are neurodiverse.",
        url: "https://disabilityin.org",
      },
      {
        id:6,
        title: "The Arc@Work",
        description: "Provides training and support for employers on hiring and accommodating employees with intellectual and developmental disabilities, including those who are neurodiverse.",
        url: "https://thearc.org/our-initiatives/employment/",
      },
      {
        id:7,
        title: "Specialisterne USA",
        description: "Provides recruitment, training, and support services for employers looking to hire neurodiverse employees, with a focus on individuals with autism.",
        url: "https://www.us.specialisterne.com/",
      },
    ];
    const images = [
      { id: 1, name: "gallery-image-1.jpg" },
      { id: 2, name: "gallery-image-2.jpg" },
      { id: 3, name: "gallery-image-3.jpg" },
      { id: 4, name: "gallery-image-4.jpg" },
      { id: 5, name: "gallery-image-5.jpg" },
      { id: 6, name: "gallery-image-6.jpg" },
    ];
    const menu = [
      { id: 1, title: "Home", link: "/home"},
      { id: 2, title: "Individuals", link: "/individuals"},
      { id: 3, title: "Families", link: "/families"},
      { id: 5, title: "Schools", link: "/schools"},
      { id: 6, title: "Employers", link: "/employers"},
    ];
    const quotes = [
      {
        id: 1,
        name: "quotes",
        tagline: "Neurodiversity Quotes",
        quote:
          "“The world will benefit significantly from talents such as empathy, emotional intensity, certitude, sensitivity, ability to detect details, depth of thought, will to embrace, and many other things that we need in a time where alienation, coldness, superficiality, and emotional hardness are predominating.”",
        author:  "Jenara Nerenberg",
        source: "Divergent Mind: Thriving in a World That Wasn't Designed for You",
        url: "https://www.goodreads.com/work/quotes/68802181",
      },
      {
        id: 2,
        name: "quotes",
        tagline: "Neurodiversity Quotes",
        quote:
          "“You’re not defective, Ewan,’ she continued. ‘You’re not broken. You’re not the wrong kind of person. And don’t let anyone in this world tell you otherwise. You and your friends are exactly who they’re meant to be.”",
        author:  "Chris Bonnello",
        source: "Underdogs",
        url: "https://www.goodreads.com/work/quotes/69751786",
      },
      {
        id: 3,
        name: "quotes",
        tagline: "Neurodiversity Quotes",
        quote:
          "“One of the cruelest tricks our culture plays on autistic people is that it makes us strangers to ourselves. We grow up knowing we're different, but that difference is defined for us in terms of an absence of neurotypicality, not as the presence of another equally valid way of being.”",
        author:  "Julia Bascom",
        source: "Loud Hands: Autistic People, Speaking",
        url: "https://www.goodreads.com/work/quotes/22469292",
      },
    ];
    const companies = [
      {
        id: 1,
        name: "Tree",
        weblink: "company-logo1.png",
        logo: "company-logo1.png",
      },
      {
        id: 2,
        name: "Fingerprint",
        weblink: "company-logo2.png",
        logo: "company-logo2.png",
      },
      {
        id: 3,
        name: "The Man",
        weblink: "company-logo3.png",
        logo: "company-logo3.png",
      },
      {
        id: 4,
        name: "Mustache",
        weblink: "company-logo4.png",
        logo: "company-logo4.png",
      },
      {
        id: 5,
        name: "Goat",
        weblink: "company-logo5.png",
        logo: "company-logo5.png",
      },
      {
        id: 6,
        name: "Justice",
        weblink: "company-logo6.png",
        logo: "company-logo6.png",
      },
      {
        id: 7,
        name: "Ball",
        weblink: "company-logo7.png",
        logo: "company-logo7.png",
      },
      {
        id: 8,
        name: "Cold",
        weblink: "company-logo8.png",
        logo: "company-logo8.png",
      },
      {
        id: 9,
        name: "Cold",
        weblink: "company-logo9.png",
        logo: "company-logo9.png",
      },
    ];
    const feedback = [
      {
        id: 1,
        name: "John Doe",
        userimage: "user-1.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "ABC",
      },
      {
        id: 2,
        name: "Roslyn Doe",
        userimage: "user-2.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
      {
        id: 3,
        name: "Thomas Doe",
        userimage: "user-3.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
    ];
    const plans = [
      {
        id: 1,
        title: "PERSONAL",
        subtitle: "The standard version",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "19",
        currency: "₹",
        downloads: "5 Downloads",
        extensions: "2 Extensions",
        tutorials: "Tutorials",
        support: "Forum Support",
        updates: "1 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
      {
        id: 2,
        title: "STUDENT",
        subtitle: "Most popular choice",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "29",
        currency: "₹",
        downloads: "15 Downloads",
        extensions: "5 Extensions",
        tutorials: "Tutorials with files",
        support: "Forum Support",
        updates: "2 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: true,
      },
      {
        id: 3,
        title: "BUSINESS",
        subtitle: "For the whole team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "49",
        currency: "₹",
        downloads: "Unlimited Downloads",
        extensions: "Unlimited Downloads",
        tutorials: "HD Video Tutorials",
        support: "Chat Support",
        updates: "Lifetime free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
    ];
    const amznAds = [
      {
        id: 1,
        key: "amzn-assoc-ad-659d311c-7e41-4f41-a40f-999b6655e2ff",
      },
    ];
    const websites = [
      {
        id: 1,
        link: "https://facebook.com/",
        title: "Facebook",
        target: "_blank",
        username: "Thor",
        icon: "facebook",
      },
      // {
      //   id: 2,
      //   link: "https://googleplus.com/",
      //   title: "Google+",
      //   target: "_blank",
      //   username: "+jagmohan",
      //   icon: "google-plus",
      // },
      {
        id: 3,
        link: "https://twitter.com/",
        title: "Twitter",
        target: "_blank",
        username: "joker",
        icon: "twitter",
      },
      {
        id: 4,
        link: "https://instagram.com/",
        title: "Instagram",
        target: "_blank",
        username: "superman",
        icon: "instagram",
      },
      // {
      //   id: 5,
      //   link: "https://behance.com/",
      //   title: "Behance",
      //   target: "_blank",
      //   username: "jagmohan",
      //   icon: "behance",
      // },
    ];

    return {
      menu,
      pages,
      individualNeurodivergences,
      familiesNeurodivergences,
      schoolsNeurodivergences,
      employersNeurodivergences,
      individualResources,
      familyResources,
      schoolResources,
      employerResources,
      images,
      quotes,
      companies,
      feedback,
      plans,
      websites,
      amznAds,
    };
  }
}
