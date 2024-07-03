import { Accordion, Col, Row } from "react-bootstrap";

export default function Tecnologias() {
    return (
        <>
            <div id="tecnologias-content">
                <h1 id="tecnologias-title" className="java-text"><span>public</span> String[] tecnologias { '{' }</h1>
                <Row className="m-0 m-auto mt-5 mb-5">
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-java-plain"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                Java, uma linguagem de programação de alto nível, orientada a objetos, utilizada para desenvolver a lógica de negócio do site. É conhecida por sua portabilidade, desempenho e segurança, sendo bastante utilizada no desenvolvimento de aplicações empresariais.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>                  
                                    <i className="devicon-spring-original"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                Spring, um framework de aplicação open-source para a plataforma Java, que fornece infraestrutura abrangente para o desenvolvimento de aplicações robustas e escaláveis. Ele facilita a criação de aplicações com injeção de dependências, transações declarativas, manipulação de dados, entre outros.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-express-original-wordmark"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                Express, um framework web minimalista e flexível para Node.js, utilizado para construir APIs e aplicações web. Ele facilita a criação de servidores HTTP e o gerenciamento de rotas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-postgresql-plain"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                PostgreSQL, um sistema de gerenciamento de banco de dados relacional open-source, conhecido por sua robustez e conformidade com os padrões SQL. Ele é utilizado para armazenar dados de forma estruturada, oferecendo suporte a tipos de dados avançados e operações complexas.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-mysql-original"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                MySQL, um sistema de gerenciamento de banco de dados relacional. Ele é uma escolha popular para aplicações web devido à sua facilidade de uso e performance.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-docker-plain"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                Docker, uma plataforma de containerização que permite empacotar aplicações e suas dependências em contêineres isolados. Isso garante que a aplicação funcione de maneira consistente em diferentes ambientes, facilitando o desenvolvimento, testes e implantação. <br/><br/> Além do Docker Compose, uma ferramenta para definir e gerenciar multi-containers Docker applications, é possível definir configurações para serviços, redes e volumes em um arquivo YAML, simplificando o processo de configuração e execução de ambientes complexos.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-react-original"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                React.js, uma biblioteca JavaScript para construir interfaces de usuário. Ela permite a criação de componentes reutilizáveis e facilita a gestão do estado da aplicação.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-nextjs-original-wordmark"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                Next.js, um framework de React para a criação de aplicações web com renderização do lado do servidor (SSR) e geração estática de sites (SSG). Ele facilita o desenvolvimento de aplicações escaláveis e otimizadas para SEO, com suporte integrado a rotas dinâmicas e API.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <i className="devicon-bootstrap-plain"></i>
                                </Accordion.Header>
                                <Accordion.Body>
                                Bootstrap, um framework front-end open-source para o desenvolvimento de interfaces web responsivas e mobile-first. Ele oferece uma coleção de componentes pré-estilizados e utilitários CSS, facilitando a criação de layouts consistentes e atrativos.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> 
                    </Col>
                </Row> 
                <h1 id="tecnologias-title" className="java-text">{ '}' }</h1>
            </div>
        </>
    );
}