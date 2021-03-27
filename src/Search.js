import './Search.css';

function Search(){
    
    return (
    <div>
      <SearchBar />
      <Hashtag/>  
      <Mode/>
      <Contents/>
    </div>
    
  
    );
}

function SearchBar(){
  return(
      <div className="inputbox">
        <input type="text" name="search" placeholder="Search.."/>
      </div>
  );
}
function Hashtag(){
  return(
    <div>
      <div className="hashtag_container">
        <button className="button">#사랑</button>
        <button className="button">#연인</button>
        <button className="button">#가족</button>
        <button className="button">#반려동물</button>
        <button className="button">#풍경</button>
        <button className="button">#안전</button>
        <button className="button">#가을</button>
        <button className="button">#바다</button>
      </div>
    </div>
  );
}
function Mode(){
  return (
      <div className="mode_container">
        <button className="button_mode">컨텐츠</button>
        <button className="button_mode">지도</button>
      </div>
  );
}

function Contents(){
  return(
    <div className="contents_container">
      <div className="contents">사랑사랑~ 하트코스?!<span><img className="img_contents" src="./images/pic06.jpg" alt="123"/></span></div>
      <div className="contents">사랑사랑~ 하트코스?!<span><img className="img_contents" src="./images/pic06.jpg" alt="123"/></span></div>
      <div className="contents">사랑사랑~ 하트코스?!<span><img className="img_contents" src="./images/pic06.jpg" alt="123"/></span></div>
      <div className="contents">사랑사랑~ 하트코스?!<span><img className="img_contents" src="./images/pic06.jpg" alt="123"/></span></div>
      <div className="contents">사랑사랑~ 하트코스?!<span><img className="img_contents" src="./images/pic06.jpg" alt="123"/></span></div>
      
        {/* <button type="button" onclick="location.href='http://naver.com' ">ssdasdass</button> */}
      
    </div>
  );

}



export default Search;