/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  background: gray;
`;

const MemberName = styled.h3`
  margin: 0.5rem 0 0;
`;

const MemberPosition = styled.p`
  margin: 0;
  color: #555;
`;

export function About(){
  return (
    <AboutSection>
      <h1>Meet the Team</h1>
      <p>Our team consists of passionate and skilled professionals dedicated to robotics and innovation.</p>
      <TeamGrid>
        <TeamMember>
          <MemberImage src="placeholder.png" alt="Alice Smith" />
          <MemberName>Alice Smith</MemberName>
          <MemberPosition>Team Leader</MemberPosition>
        </TeamMember>
        <TeamMember>
          <MemberImage src="placeholder.png" alt="Bob Johnson" />
          <MemberName>Bob Johnson</MemberName>
          <MemberPosition>Software Engineer</MemberPosition>
        </TeamMember>
        <TeamMember>
          <MemberImage src="placeholder.png" alt="Carol White" />
          <MemberName>Carol White</MemberName>
          <MemberPosition>Mechanical Engineer</MemberPosition>
        </TeamMember>
        <TeamMember>
          <MemberImage src="placeholder.png" alt="Dave Black" />
          <MemberName>Dave Black</MemberName>
          <MemberPosition>Electrical Engineer</MemberPosition>
        </TeamMember>
      </TeamGrid>
    </AboutSection>
  );
};
