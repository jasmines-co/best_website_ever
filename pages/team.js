import Header from "../components/shared/Header";
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';

const Team = (props) => {
  return (
    <div className="about">
    <Header />
    <CardGroup>
      <Card>
        <CardImg top width="50%" src="/static/apple.png" alt="apple" />
        <CardBody>
          <CardTitle>Jasmine Anderson</CardTitle>
          <br/>
          <CardSubtitle>Backend Engineer</CardSubtitle>
          <br/>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/fluttershy2.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Kendra Moore</CardTitle>
          <br/>
          <CardSubtitle>UX/Front End Engineer</CardSubtitle>
          <br/>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/pinkie.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sukrobjon Golibboev</CardTitle>
          <br/>
          <CardSubtitle>Backend Engineer</CardSubtitle>
          <br/>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/rainbow.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Fodé Diop</CardTitle>
          <br/>
          <CardSubtitle>Senior Backend Engineer</CardSubtitle>
          <br/>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/static/twilight.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Jasmine Humbert</CardTitle>
          <br/>
          <CardSubtitle>Product Manager/Git Master</CardSubtitle>
          <br/>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardGroup>
    </div>
  );
};

export default Team;