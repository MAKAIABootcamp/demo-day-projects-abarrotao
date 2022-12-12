import React, { useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionGetGlocersAsync } from "../../redux/actions/glocersActions";

const Home = () => {
    const { glocers } = useSelector((store) => store.glocerStore);
    const dispatch = useDispatch()
    console.log(glocers);

    useEffect(() => {
        dispatch(actionGetGlocersAsync())
    }, [dispatch])


    return (
        <div className="main__home">
            {
                glocers && glocers.length ? (
                    glocers.map((glocer, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={glocer.image} style={{ height: '10rem', objectFit: 'contain' }} />
                            {/* <Badge bg="warning" text="dark">{glocer.location}</Badge> */}
                            <Card.Body>
                                <Card.Title>{glocer.name}</Card.Title>
                                <Card.Text>{`Tienda:${glocer.description}`}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (<></>)
            }

        </div>
    )
}
export default Home