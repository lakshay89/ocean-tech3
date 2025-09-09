"use client"
import React from 'react'
import './Get in Touch.css';
import Image from 'next/image';
import img2 from '../../Images/current/touch1-removebg-preview.png';
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from 'next/link';

export default function GetInTouch() {
    return (
        <section className="get-in-touch py-5" style={{ backgroundColor: "#fff" }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={7} className="mb-4 mb-md-0">
                        <h2 className="text-primary fw-bold mb-3">Get in Touch – Let’s Grow Together</h2>
                        <p className="text-dark mb-4">
                            Are you ready to take your business to the next level? Let us help you build a
                            digital marketing strategy that works. Whether you need SEO, social media management,
                            PPC campaigns, or a complete online branding solution, we are here to make it happen.
                        </p>
                        <ul className="list-unstyled text-dark mb-4">
                            <li><strong>Phone:</strong> +91 9289933499</li>
                            <li><strong>Website:</strong> info@oceantechzone.com</li>
                        </ul>
                        <Link href="/Pages/contact">
                            <Button variant="primary" size="lg" className="rounded-pill px-4">
                                Book Your Free Consultation Today
                            </Button>
                        </Link>
                    </Col>
                    <Col md={5} className="text-center">
                        <Image
                            src={img2}
                            alt="Get in Touch"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
