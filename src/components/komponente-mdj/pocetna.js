import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import Footer from '../global-components/footer';
import PostList from "../blog-components/post-list";
import PopularPost from "../blog-components/popular-post";

const Pocetna = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Početna" />
        <PopularPost />
        <PostList />
        <Footer />
    </div>
}

export default Pocetna

