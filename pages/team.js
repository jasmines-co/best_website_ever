import Header from "../components/shared/Header";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';
 // This is the Link API
import BasePage from "../components/BasePage";

const Team = (props) => {
  return (
  <BasePage>
    <div className="about">
    <Header />
    <CardGroup>
      <Card>
        <CardImg top width="50%" src="/static/apple.png" alt="apple" />
        <CardBody>
          <CardTitle><h3>Jasmine Anderson</h3></CardTitle>
          <br/>
          <CardSubtitle>Backend Engineer</CardSubtitle>
          <br/>
          <CardText>Jasmine started her computer science journey in Florida. While working in 
            retail she decided that she wanted to shift focus on her career to computer science. 
            She saw the impact that technology has on the world, and the ability it has to change 
            it for the better. Jasmine moved to California to attend MakeSchool to sharpen her 
            technical skills and eventually create technology that will solve problems in her 
            community, and makes the world a better place.</CardText>
            <Button href="/link">Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/fluttershy2.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Kendra Moore</h3></CardTitle>
          <br/>
          <CardSubtitle>UX/Front End Engineer</CardSubtitle>
          <br/>
          <CardText>Kendra arrived at Make School after living in the Austin, TX area for four years. 
            She has a bachelor degree in history and spent five years as an Air
             Defense Artillery officer in the US Army. She enjoys reading 
             long-form articles, traveling, and programming in her free time. 
             Kendra has lived in several different countries to include Russia 
             and Estonia. She has visited over 25 countries to include Colombia 
             this past December where she visited Rappi, the first South American 
             unicorn tech company.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/pinkie.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Sukrobjon Golibboev</h3></CardTitle>
          <br/>
          <CardSubtitle>Backend Engineer</CardSubtitle>
          <br/>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button href="/link">Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/rainbow.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Fodé Diop</h3></CardTitle>
          <br/>
          <CardSubtitle>Senior Backend Engineer</CardSubtitle>
          <br/>
          <CardText>Fodé Diop is a Computer Science student at Make School. He's one of the 
            few people in San Francisco with production experience in the fields of Ethereum 
            Smart Contracts. He was part of the winning team of Dora Hack's 
            first US Blockchain and AI hackathon. He was the winner of Facebook
             DevCircles Oakland Bot Hackathon where he and his teammate built a 
             Facebook Messenger bot which can teach a non-native English speaker
              Computer Science terms. He's also one of the leading instructors 
              in the blockchain education space in Silicon Valley. This is his 
              first paid Meetup in San Francisco and has set the entry price low 
              enough to be accessible by everybody! He co-founded the Oakland 
              Blockchain Developers Meetup group. He now started and runs the 
              Programmable Money meetup in San Francisco.</CardText>
            <Button href="/link">Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/twilight.png" alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>Jasmine Humbert</h3></CardTitle>
          <br/>
          <CardSubtitle>Product Manager/Git Master</CardSubtitle>
          <br/>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button href="/link">Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  </BasePage>
  );
};

export default Team;