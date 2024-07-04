import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ModalResposta from "./ModalRespostaServidor";
import sendEmail from "@/routes/route";

const URL_SEND_EMAIL = "https://spring-portfolio-api.azurewebsites.net/email/send-email";

export default function Contato() {
    const { register, handleSubmit } = useForm();
    const [show, setShow] = useState(false);
    const [content, setContent] = useState("");
    const handleClose = () => setShow(false);

    async function SubmitForm(data) {
        const res = await sendEmail(URL_SEND_EMAIL, data);

        if (res === 200) {
            setContent("Mensagem enviada com sucesso!");
            
        } else {
            setContent("Erro ao enviar mensagem. Tente novamente mais tarde!");
        }
        setShow(true);
    }

    return (
        <>
            <ModalResposta handleClose={handleClose} content={content} show={show}/>
            <div id="contato-content">
                <h1 id="contato-title" className="java-text"><span>public void</span> contato() { '{' }</h1>
                <Row className="m-0 m-auto mt-5 mb-5">
                    <Col lg={12}>
                        <div className="card-contato p-4 m-auto mt-3">
                            <form onSubmit={handleSubmit(SubmitForm)}>
                                <div id="text-title-form">
                                    <h4>Entre em contato! <i className="bi bi-envelope-at-fill"></i></h4>
                                </div>
                                <div id="inputs" className="mt-3">
                                    <div id="name-contato">
                                        <label htmlFor="name">Seu Nome</label><br/>
                                        <input 
                                            type="text"
                                            id="name"
                                            placeholder="Qual seu nome?"
                                            {...register("clientName")}/>
                                    </div>
                                    <div id="email-contato">
                                        <label htmlFor="email">Seu Email</label><br/>
                                        <input 
                                            type="text"
                                            id="email"
                                            placeholder="Qual seu email?"
                                            {...register("clientEmail")}/>
                                    </div>
                                    <div id="message-contato">
                                        <label htmlFor="message">Sua Mensagem</label><br/>
                                        <textarea
                                            rows={4}
                                            cols={40} 
                                            type="text"
                                            id="message"
                                            placeholder="Qual sua mensagem?"
                                            {...register("clientMessage")}/>
                                    </div>
                                    <div>
                                        <Button type="submit" id="submit-form">Enviar</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <h1 id="contato-title" className="java-text">{ '}' }</h1>
            </div>
            <h1 id="title" className="java-text chave-final">{ '}' }</h1> 
        </>
    );
}
