import { useContext, useState, useEffect } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Card, Button, Col, Container, Image, Row, Form } from "react-bootstrap";
import "../style/header.css";
import CommentSection from './CommentSection';

const Watchlist = () => {
    const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredWatchlist = watchlist.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mybg2">
            <Container className="my-4">
                <h2 className="text-center text-white mb-4">Watchlist Saya</h2>

                {/* 🔍 Input Pencarian */}
                <Form className="mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Cari film dalam watchlist..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Form>

                <Row>
                    {filteredWatchlist.length === 0 ? (
                        <p className="text-white">Tidak ditemukan film dengan judul tersebut.</p>
                    ) : (
                        filteredWatchlist.map((movie, index) => (
                            <Col md={4} className="movieWriper" key={index}>
                                <Card className="text-white text-center movieImage">
                                    <Image
                                        src={movie.image || movie.thumbnail || "https://via.placeholder.com/200x300"}
                                        alt={movie.title}
                                    />
                                    <div className="bg-dark p-2">
                                        <Card.Title>{movie.title}</Card.Title>
                                        <Card.Text>
                                            Ditambahkan ke watchlist.
                                        </Card.Text>
                                        <Button variant="danger" onClick={() => removeFromWatchlist(movie.title)}>
                                            Hapus
                                        </Button>
                                        {/* 💬 Komentar & Rating */}
                                        <CommentSection movieTitle={movie.title} />
                                    </div>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>

    );
};

export default Watchlist;
