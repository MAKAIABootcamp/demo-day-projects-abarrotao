import React, { useEffect } from "react";
import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionGetGlocersAsync } from "../../redux/actions/glocersActions";

const Home = () => {
    const { glocers } = useSelector((store) => store.glocersStore);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionGetGlocersAsync())
    }, [dispatch])


    return (
        <div className="main__home">
            {
                glocers && glocers.length ? (
                    glocers.map((glocer, index) => (
                        <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={glocer.imagen} style={{ height: '10rem', objectFit: 'contain' }} />
                            <Badge bg="warning" text="dark">{glocer.direccion}</Badge>
                            <Card.Body>
                                <Card.Title>{glocer.Nombre}</Card.Title>
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