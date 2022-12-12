import React, { useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionGetGlocersAsync } from "../../redux/actions/glocersActions";
import './home.scss';

const Home = () => {
    const { glocers } = useSelector((store) => store.glocerStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(glocers);

    useEffect(() => {
        dispatch(actionGetGlocersAsync())
    }, [dispatch])


    return (
        <div className="home">

            {
                glocers && glocers.length ? (
                    glocers.map((glocer, index) => (
                        <section>
                            <Card key={index} style={{ width: '18rem', height: '50%' }} onClick={() => { navigate(`/tienda${glocer.name}`); }}>
                                <Card.Img variant="top" src={glocer.image} style={{ height: '10rem', objectFit: 'cover' }} className='imgCard'/>
                                <Badge bg="warning" text="dark">{glocer.name}</Badge>
                                <Card.Body>
                                    <Card.Title>{glocer.seller}</Card.Title>
                                    <Card.Text>{`${glocer.description}`}</Card.Text>
                                </Card.Body>
                            </Card>
                        </section>
                    ))
                ) : (<></>)
            }

        </div>
    )
}
export default Home