import React from 'react';
import propTypes from "prop-types";
import { Container, PostLink, Img, Content } from './styles';
import Thumbnail from "../../images/matter.png";
const Post = ({ title, slug, image }) => (
    <Container>
        <PostLink to={slug}>
            <Img>
                <img src={image ? image : Thumbnail}  alt={title}/>
            </Img>
            <Content>
                <h1>{title}</h1>
                <span>Há 5 minutos</span>
            </Content>
        </PostLink>
    </Container>
)
Post.propTypes = {
    title: propTypes.string.isRequired,
    slug: propTypes.string.isRequired,
    image: propTypes.string,
}
export default Post;