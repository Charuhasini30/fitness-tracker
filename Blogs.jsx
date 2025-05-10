import React from "react";
import styled, { keyframes } from "styled-components";


const blogs = [
  {
    title: "Daily Mobility Routine to Start Your Morning",
    description: "Boost circulation and reduce stiffness with this 10-minute daily movement routine to energize your day.",
    url: "https://r.search.yahoo.com/_ylt=Awr1TcyOwBxoHwIAyIi7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1747924367/RO=10/RU=https%3a%2f%2fsparklingmoods.com%2f10-minute-morning-workout%2f/RK=2/RS=aFw59eEx_dVqa91MwEvDHh9Oh7U-",
  },
  {
    title: "Why Rest Days Are Just As Important As Workouts",
    description: "Discover the science behind recovery and how it improves your performance and prevents injuries.",
    url: "https://r.search.yahoo.com/_ylt=AwrKFiQnwRxoKgIApzq7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1747924520/RO=10/RU=https%3a%2f%2fjeffreyderderian.com%2fthe-importance-of-rest-days-how-recovery-improves-performance-and-prevents-injuries%2f/RK=2/RS=g8mRgl0mwxGLuEMrOvG_SebzPPY-",
  },
  {
    title: "Hydration Hacks for Active Lifestyles",
    description: "Simple ways to stay hydrated before, during, and after exercise without overdoing it.",
    url: "https://r.search.yahoo.com/_ylt=Awrx.qZ2wRxoGQMA76u7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj/RV=2/RE=1747924599/RO=10/RU=https%3a%2f%2fwww.moneycontrol.com%2fnews%2fhealth-and-fitness%2fhow-to-exercise-the-way-you-hydrate-before-during-and-after-workout-can-impact-your-fitness-routine-11390201.html%23%3a~%3atext%3dExercise%2520tips%253A%2520Avoid%2520the%2520ill%2520effects%2520of%2520exercising%2ckeep%2520you%2520adequately%2520hydrated%2520while%2520you%2520stay%2520active./RK=2/RS=lO2PXTF.5x0UZ8I2LAwp1pOmqxo-",
  },
  {
    title: "Mental Benefits of Regular Exercise",
    description: "Explore how exercise supports mental health, reduces anxiety, and enhances focus.",
    url: "https://r.search.yahoo.com/_ylt=Awr1WTOlwRxoMwIATx.7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj/RV=2/RE=1747924646/RO=10/RU=https%3a%2f%2fhealthhype.com%2fhow-exercise-helps-reduce-anxiety-and-depression.html%23%3a~%3atext%3dPhysical%2520activity%2520does%2520more%2520than%2520build%2520muscle%25E2%2580%2594it%2520significantly%2cserotonin%2520levels%252C%2520and%2520reduces%2520cortisol%2520%2528the%2520stress%2520hormone%2529./RK=2/RS=GLza4GR17IeN6y32JRNG6p1FWUY-",
  },
  {
    title: "Smart Eating for Fitness Enthusiasts",
    description: "Learn how to fuel your workouts with balanced nutrition and smart meal timing.",
    url: "https://r.search.yahoo.com/_ylt=Awr1SVHTwRxoCgIA_1W7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1747924692/RO=10/RU=https%3a%2f%2fwellbeingnutrition.com%2fblogs%2fsports-performance%2ffitness-and-nutrition-what-to-eat-before-and-after-your-workout/RK=2/RS=YBnlNWc1M49aM1s44VUugKsekoM-",
  },
  {
    title: "The Power of Stretching Before and After Workouts",
    description: "Understand why stretching is vital to prevent injuries and improve flexibility before and after your sessions.",
    url: "https://r.search.yahoo.com/_ylt=Awrx_zdNwR1o7AIAR8e7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj/RV=2/RE=1747990093/RO=10/RU=https%3a%2f%2felementfitness.com.au%2f2025%2f02%2f06%2fstretching-before-and-after-gym-session%2f%23%3a~%3atext%3dStretching%2520is%2520a%2520crucial%2520part%2520of%2520any%2520gym%2cand%2520sets%2520the%2520stage%2520for%2520a%2520productive%2520session./RK=2/RS=O9jrjpJQycM1QgBQtEjMrtOmrWY-"
  },
  {
    title: "Top Superfoods to Boost Your Workout Performance",
    description: "Explore nutrient-rich superfoods that help fuel your exercise and speed up recovery.",
    url: "https://www.medicalnewstoday.com/articles/322268"
  },
  {
    title: "Evening Workouts: Benefits and Best Practices",
    description: "Learn how exercising in the evening can improve sleep, reduce stress, and fit your lifestyle.",
    url: "https://www.sleepfoundation.org/physical-activity/exercise-and-sleep"
  },
  {
    title: "Beginner’s Guide to Strength Training",
    description: "A complete guide for those new to lifting, including basic exercises and tips for building strength safely.",
    url: "https://www.nerdfitness.com/blog/strength-training-101/"
  },
  {
    title: "Tracking Fitness Progress with Smart Technology",
    description: "Find out how wearables and fitness apps can help you monitor goals and stay motivated.",
    url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7957966/"
  },
  
];

const Container = styled.div`
  flex: 1;
  padding: 24px 16px;
  height: 100%;
  overflow-y: scroll;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
`;

const BlogCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

const BlogTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const BlogDescription = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const BlogLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;

// 🔁 Image Slider Styles
const move = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }  
`;


const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 40px;
  border-radius: 16px;
`;

const Slider = styled.div`
  display: flex;
  width: 300%;
  animation: ${move} 30s infinite ease-in-out;
`;

const Slide = styled.img`
  width: 10%;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 12px;
`;

const Blogs = () => {
  return (
    <Container>
      {/* 🎞️ Moving Image Slider */}
      <CarouselContainer>
        <Slider>
          <Slide src="https://tse4.mm.bing.net/th?id=OIP.2LH--sZ7QrqSJM3dFRarJwHaHa&pid=Api&P=0&h=180" />
          <Slide src="https://i.pinimg.com/originals/3c/59/ce/3c59ce1f9ee239dd349ca1318ec8de46.jpg" />
          <Slide src="https://i.pinimg.com/736x/7e/2b/a7/7e2ba7f690875667b1ffe1b8872d3a2b.jpg"/>
          <Slide src="https://i.pinimg.com/originals/2c/94/3a/2c943a6ef1dc493611ae47dbcd729946.jpg" />
          <Slide src="https://tse4.mm.bing.net/th?id=OIP.2LH--sZ7QrqSJM3dFRarJwHaHa&pid=Api&P=0&h=180" />
          <Slide src="https://i.pinimg.com/originals/3c/59/ce/3c59ce1f9ee239dd349ca1318ec8de46.jpg" />
          <Slide src="https://i.pinimg.com/originals/2c/94/3a/2c943a6ef1dc493611ae47dbcd729946.jpg" />
        </Slider>
      </CarouselContainer>
  
      <Title>Read Health & Fitness Blogs</Title>
      <BlogGrid>
        {blogs.map((blog, index) => (
          <BlogCard key={index}>
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDescription>{blog.description}</BlogDescription>
            <BlogLink href={blog.url} target="_blank" rel="noopener noreferrer">
              Read More →
            </BlogLink>
          </BlogCard>
        ))}
      </BlogGrid>
    </Container>
  );
};

export default Blogs;