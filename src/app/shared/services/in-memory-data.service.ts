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
        title: "Individual Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "Individual Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "Individual Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const familyResources = [
      {
        id: 1,
        title: "Family Resource 1",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
        url: "",
      },
      {
        id: 2,
        title: "Family Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "Family Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "Family Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const schoolResources = [
      {
        id: 1,
        title: "School Resource 1",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
        url: "",
      },
      {
        id: 2,
        title: "School Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "School Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "School Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
    ];
    const employerResources = [
      {
        id: 1,
        title: "Employer Resource 1",
        description:
          "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico",
        url: "",
      },
      {
        id: 2,
        title: "Employer Resource 2",
        description:
          "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi",
        url: "",
      },
      {
        id: 3,
        title: "Employer Resource 3",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
      },
      {
        id: 4,
        title: "Employer Resource 4",
        description:
          "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum",
        url: "",
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
    };
  }
}
