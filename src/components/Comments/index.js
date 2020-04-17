import React from 'react';
import propTypes from "prop-types";
import ReactDisqusComments from 'react-disqus-comments';
import { Container, CommentsTitle } from './styles';

const Comment = ({ url, title }) => {

    const complete = `https://lardoslivros.netlify.app${url}`
    return(
    <Container>
        <CommentsTitle>Comentários</CommentsTitle>
        <ReactDisqusComments
        shortname="lar-dos-livros"
        identifier={complete}
        title={ title }
        url={complete}
        />
    </Container>
)}
Comment.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}
export default Comment
