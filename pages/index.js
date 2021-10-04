import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/Header';
import { getAllPostsForHome } from '../utils/lib/api';
import BlogList from '../components/BlogList/BlogList';
import PostItem from '../components/PostItem/PostItem';

export async function getStaticProps() {
  const data = await getAllPostsForHome();
  if(!data) {
    return {
      notFound: true
    }
  }
  return {
    props: { 
      data
    }
  }
} 

export default function Home({data}) {
  const posts = data.items;
  console.log(posts);
  
  return (
    <div>
      <div></div>
      <div>
        {posts.map(post => 
          <div>
            <h1 style={{fontSize: '2rem'}}>{post.fields.title}</h1>
            <p>{post.fields.description.content[0].content[0].value}</p>
          </div>
        )}
      </div>
    </div>
  )
}
