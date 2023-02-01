import React from 'react';
import MainScreen from "../screens/MainScreen";

import {Button, Card, Badge, Accordion} from "react-bootstrap";
import notes from "../notes";

const MyNotes = () => {

    return (
        <div>
            <MainScreen title="MY NOTES"/>

                <Button style={{marginLeft:10,marginBottom:6}} size={"lg"}>

                    Create New Note
                </Button>
            {
                notes.map(note=>(

                            <Accordion >
                                <Card style={{ margin: 10}} key={note._id}>
                                <Accordion.Item eventKey="0">
                                   <Accordion.Header>
                                       <Card.Header style={{ display: "flex" }}>
                                       <span
                                         
                                           style={{
                                               color: "black",
                                               textDecoration: "none",
                                               flex: 1,
                                               cursor: "pointer",
                                               alignSelf: "center",
                                               fontSize: 18,

                                           }}
                                       >
                                            {note.title}
                                    </span>
                                           <div>
                                               <Button href={`/note/${note._id}`}>Edit</Button>
                                               <Button
                                                   variant="danger"
                                                   className="mx-2"
                                                   // onClick={() => deleteHandler(note._id)}
                                               >
                                                   Delete
                                               </Button>
                                           </div>

                                       </Card.Header>
                                   </Accordion.Header>
                                    <Accordion.Body>

                                        <Card.Body>
                                            <h4>
                                                <Badge variant="success">
                                                    Category - {note.category}
                                                </Badge>
                                            </h4>
                                            <blockquote className="blockquote mb-0">
                                                {/*<ReactMarkdown>{note.content}</ReactMarkdown>*/}
                                                <footer className="blockquote-footer">
                                                    Created on{" "}
                                                    <cite title="Source Title">
                                                        {/*{note.createdAt.substring(0, 10)}*/}
                                                    </cite>
                                                </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Accordion.Body>
                                </Accordion.Item>
                                </Card>
                            </Accordion>





                ))}

        </div>

    );
};

export default MyNotes;