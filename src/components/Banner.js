import assetsDummy from '../assetsDummy.json';

function Banner(){
    const bannerImg = assetsDummy['background-image'] // Getting image from json file because we need to able to edit it from a CMS, making the CMS edit the JSON file

    return(
        <div>
            <div className='mx-auto'>
            <div className='bg-fixed' style={{backgroundImage:`url(${bannerImg})`}}>
              <div className='max-w max-h absolute m-auto' style={{background:'rgba(0, 0, 0, 0.3)'}}></div>
              <div className='z-10 mx-auto py-48 text-center place-content-center text-white brightness-100'>
                <h1 className='text-6xl mb-2'>Ideas</h1>
                <p className='text-xl'>Where all our great things begin</p>
              </div>
            </div>
                  </div>
                  <div className='overlay my-0'></div>
        </div>
    );
}

export default Banner;
