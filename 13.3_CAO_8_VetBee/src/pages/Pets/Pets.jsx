import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import CardWrap from "../../components/cardWrap/CardWrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";

import './pets.css';

const Pets = () => {

    let cardArray = [
        {
            name: 'Levis',
            date: '2021-01-01',
            email: 'modestas@lexita.lt',
            cards: [
                {label: 'View logs'},
                {label: 'Delete'},
            ]
        },
        {
            name: 'Levis',
            date: '2021-01-01',
            email: 'modestas@lexita.lt',
            cards: [
                {label: 'View logs'},
                {label: 'Delete'},
            ]
        }
    ];

    return (
        <main>
            <Header></Header>
            <div className="content">
                <PageHeader 
                    mainLabel="Pets list" 
                    btnLabel="Add pet"
                >
                </PageHeader>

                <CardWrap>
                    {cardArray.map(pet => (
                        <Card key={pet.name}>
                            <h3>{pet.name}</h3>
                            <div>{pet.date}</div>
                            <div>{pet.email}</div>

                            <div className="card-buttons-wrap">
                                {pet.cards.map(button => (
                                    <Button key={button.label} label={button.label} className="card-button" />
                                ))}
                            </div>
                        </Card>
                    ))}
                </CardWrap>
            </div>
            <Footer></Footer>
        </main>
    );
  };
  
  export default Pets;