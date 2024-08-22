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
        } else if (res === 400) {
            setContent("Domínio de email inexistente!");
        } else {
            setContent("Erro ao enviar mensagem. Tente novamente mais tarde!");
        }
        setShow(true);
    }

    return (
        <>
            <ModalResposta handleClose={handleClose} content={content} show={show}/>
            <div id="contato-content">
                <Row className="m-0 m-auto">
                    <Col lg={12}>
                        <div className="card-contato p-4 m-auto ">
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
                                            {...register("clientName")}
                                            required/>
                                    </div>
                                    <div id="email-contato">
                                        <label htmlFor="email">Seu Email</label><br/>
                                        <input 
                                            type="text"
                                            id="email"
                                            placeholder="Qual seu email?"
                                            {...register("clientEmail")}
                                            required/>
                                    </div>
                                    <div id="message-contato">
                                        <label htmlFor="message">Sua Mensagem</label><br/>
                                        <textarea
                                            rows={4}
                                            cols={40} 
                                            type="text"
                                            id="message"
                                            placeholder="Qual sua mensagem?"
                                            {...register("clientMessage")}
                                            required/>
                                    </div>
                                    <div>
                                        <Button type="submit" id="submit-form">Enviar</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
