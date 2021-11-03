import Header from '../../components/Common/Header/Header';
import Footer from '../../components/Common/Footer';
import Board from 'components/Board/Board';
import Head from 'next/head';

function search() {
  return (
    <>
      <Head>
        <title>동그라미 | 게시글 검색</title>
      </Head>
      <Header />
      <Board category="questionAndAnswer" />
      <Footer />
    </>
  );
}

export default search;
