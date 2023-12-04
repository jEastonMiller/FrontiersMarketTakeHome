import banner from '../assets/banner.png';
import dSellingOne from '../assets/d-selling-1.png';
import dSellingTwo from '../assets/d-selling-2.png';
import dSellingThree from '../assets/d-selling-3.png';
import ranchers from '../assets/ranchers.png';
import flag from '../assets/flag.png';
import logo from '../assets/logo.svg';
import pocketDesktop from '../assets/pocket_desktop.png';
import map from '../assets/map.png';
import signature from '../assets/signature.svg';
import tfmfTwo from '../assets/tfmf2.png';
import tfmf from '../assets/tfmf.png';
import usCountry from '../assets/us_country.png';

/**
 * Renders the main App component.
 * @return {JSX.Element} JSX element representing the main App component.
 */
interface StaticProps {
  handleAuth: (bool: boolean, mode: string) => void;
}
function Static(props: StaticProps): JSX.Element {
  return (
    <div
      id="root"
      style={{
        minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto', width: '100vw',
      }}>

      <section className='flex bg-primary py-3 relative w-full'>
        <div
          className='container flex flex-row justify-between text-sm lg:text-base xl:translate-x-4'
        >
          <a className="flex justify-between md:w-full" href="/mobile-app">
            <div>
              <p className="hidden md:flex items-center gap-2 text-white">
                <img src={flag} width="24" height="24" alt="flag" />
                Join our Early Access program to test our cattle weight app on your ranch.
              </p>
            </div>
            <div className="flex gap-2 text-white items-center">
              <p className="hidden md:block">Available on</p>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#FFFFFF" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(255, 255, 255)'}}>
                <path
                  d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"></path><path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z">
                </path>
              </svg>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#8BC34A" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(139, 195, 74)'}} >
                <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z">
                </path>
              </svg>
              <p className="md:hidden font-medium text-base">Test our cattle weight app.</p>
            </div>
          </a>
        </div>
        <button className="pr-4" aria-label="remove banner">
          <svg stroke="currentColor" fill="#D0D5DD" strokeWidth="0" viewBox="0 0 16 16" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
            </path>
          </svg>
        </button>
      </section>
      <nav className="container py-4 sm:py-6">
        <div className="flex flex-row items-end justify-between gap-16">
          <a href="/">
            <picture>
              <source media="(max-width: 576px)" srcSet={logo} width="26" height="34" />
              <img src={logo} alt="Logo" width="100" height="32" />
            </picture>
          </a>
          <div className="flex flex-1 flex-row items-center justify-end gap-3">
            <div className="max-md:hidden flex flex-1 ">
              <a className="bg-white border-[#E4E7EC] border-[1px] rounded-md py-2 px-3 font-medium text-sm sm:text-base text-[#1D2939]" href="/browse">Browse livestock</a>
            </div>
            <a className="hidden md:flex gap-2 text-primary text-base pr-3 items-center" href="tel:+15123874314 ">Call us
              <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 1.5V2C7.5 2.28125 7.25 2.5 7 2.5H4C3.71875 2.5 3.5 2.28125 3.5 2V1.5H2.5C1.9375 1.5 1.5 1.96875 1.5 2.5V13.5C1.5 14.0625 1.9375 14.5 2.5 14.5H8.5C9.03125 14.5 9.5 14.0625 9.5 13.5V2.5C9.5 1.96875 9.03125 1.5 8.5 1.5H7.5ZM0 2.5C0 1.125 1.09375 0 2.5 0H8.5C9.875 0 11 1.125 11 2.5V13.5C11 14.9062 9.875 16 8.5 16H2.5C1.09375 16 0 14.9062 0 13.5V2.5Z" fill="#008627">
                </path>
              </svg>
            512-387-4314
            </a>
            <div className="flex gap-3">
              <a
                className="font-semibold text-sm sm:text-base rounded-md py-2 px-3 text-primary border border-lightGrey hover:cursor-pointer"
                onClick={() => {
                  props.handleAuth(true, 'login');
                }}
              >Log in
              </a>
              <a
                className="font-bold text-sm sm:text-base rounded-md py-2 px-3 bg-primary text-white hover:cursor-pointer"
                onClick={() => {
                  props.handleAuth(true, 'register');
                }}
              >Register</a>
            </div>
          </div>
        </div>
      </nav>


      <main className="flex flex-col gap-8 md:gap-16 lg:gap-20">

        <section className="container max-md:px-0">
          <div className="relative flex flex-col items-center justify-center py-10 md:pt-24 md:pb-40 z-10">
            <span className="text-sm sm:text-base bg-white text-primary font-medium gap-2 py-1 px-4 rounded-3xl z-10">Trusted by 10,000+ livestock owners 🐄</span>
            <h1 className="text-3xl md:text-[56px] md:leading-[4rem] text-primary text-center font-archia font-semibold p-5 pb-10 z-10">Search Livestock For Sale</h1>
            <a className="bg-secondary text-white text-base md:text-lg font-bold rounded-lg py-4 px-11 z-10" href="/browse">Browse livestock</a>
            <img className="absolute inset-0 w-full h-full -z-0 object-cover object-top" loading="eager" src={banner} alt="Banner" style={{aspectRatio: '1120 / 472'}} />
          </div>
        </section>

        <section className="container pt-6">
          <p className="text-center text-base text-secondary font-semibold uppercase">Trusted livestock marketplace</p>
          <h2 className="text-center text-2xl leading-9 md:text-[36px] md:leading-12 text-primary font-archia font-semibold">Why buy &amp; sell on Frontiers Market?</h2>
          <section className="flex flex-col items-center py-6 md:py-8">
            <div className="flex gap-2 border border-slate-300 rounded-3xl p-1">
              <button type="button" className="font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl text-white bg-secondary">I’m here for selling</button>
              <button type="button" className="font-semibold text-sm lg:text-base px-4 py-2 rounded-3xl text-grey">I’m here for buying</button>
            </div>

          </section>

          <section className="bullets flex flex-col md:mt-6">
            <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
              <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
                <p className="font-semibold text-sm text-secondary leading-5 uppercase">Free to list</p>
                <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">Sell to a National Market</p>
                <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">Sell to anyone from industry giants to small-scale operations wanting to buy your product. Ensure fair, competitive prices in the national market with buyers you can trust. Get listings seen for free.</p>
              </div>
              <div className="flex flex-1 justify-center md:justify-end">
                <img src={dSellingOne} width="360px" decoding="async" loading="lazy" />
              </div>
            </article>

            <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
              <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
                <p className="font-semibold text-sm text-secondary leading-5 uppercase">Get more details</p>
                <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">Make More Sales</p>
                <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">Access to Frontiers Market’s marketplace means you are seen by thousands of potential buyers. As soon as you are verified to sell, get offers from all over the country.</p>
              </div>
              <div className="flex flex-1 justify-center md:justify-end">
                <img src={dSellingTwo} width="362px" decoding="async" loading="lazy" />
              </div>
            </article>

            <article className="bullet-marker flex flex-col-reverse md:flex-row gap-8 md:gap-28 md:ml-10 md:pl-10 md:pr-4">
              <div className="flex flex-1 flex-col md:gap-2 md:pt-10 lg:pt-20">
                <p className="font-semibold text-sm text-secondary leading-5 uppercase">Instant messaging</p>
                <p className="font-semibold text-xl md:text-[28px] text-primary leading-8 md:leading-15">Quick &amp; Easy Process</p>
                <p className="font-medium text-base md:text-lg text-grey leading-6 md:leading-7">Connect quickly with buyers and negotiate directly until you are satisfied. Your cattle don’t leave the ranch until you meet a buyer you like.</p>
              </div>
              <div className="flex flex-1 justify-center md:justify-end">
                <img src={dSellingThree} width="374px" decoding="async" loading="lazy" />
              </div>
            </article>
          </section>

        </section>

        <section className="container">
          <p className="text-base text-secondary font-semibold uppercase">Verified listings added daily</p>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl leading-9 md:text-3xl md:leading-12 text-primary font-archia font-semibold">Thousands of Cattle to Browse</h2>
          </div>
          <form className="lg:flex flex-col gap-3 justify-end">
            <div className="flex">
              <input placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                className="flex-grow border border-lightGrey rounded-l-lg text-sm text-[#475467] p-3"
                value=""
                readOnly>
              </input>
              <select
                name="state-select"
                id="state-select"
                className="max-md:hidden border border-lightGrey text-sm text-[#475467] p-3">
                <option value="all">All States</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VI">Virgin Islands</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <button type="submit" className="flex gap-3 items-center justify-center text-lg text-white bg-secondary p-3 rounded-r-lg leading-normal">Search
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                  </path>
                </svg>
              </button>
            </div>
          </form>
        </section>

        <section className="bg-how-to-start py-14 md:py-24">
          <div className="relative container flex flex-col items-center justify-center py-4">
            <p className="z-10 text-center text-base text-secondary font-semibold uppercase">How to start</p>
            <h2 className="z-10 text-center text-2xl leading-9 md:text-3xl md:leading-12 text-primary font-archia font-semibold">Start selling around the country</h2>
            <div className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-6 md:py-16">
              <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
                <div className="flex items-center flex-row md:flex-col gap-2">
                  <span className="text-secondary text-lg md:text-4xl font-bold">1</span>
                  <span className="text-primary text-base md:text-lg font-semibold">Create a free account</span>
                </div>
                <p className="text-sm md:text-base md:text-center text-grey">We don’t collect any fee for listing livestock.</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
                <div className="flex items-center flex-row md:flex-col gap-2">
                  <span className="text-secondary text-lg md:text-4xl font-bold">2</span>
                  <span className="text-primary text-base md:text-lg font-semibold">Get approved to sell</span>
                </div>
                <p className="text-sm md:text-base md:text-center text-grey">We strive for providing the highest security.</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
                <div className="flex items-center flex-row md:flex-col gap-2">
                  <span className="text-secondary text-lg md:text-4xl font-bold">3</span>
                  <span className="text-primary text-base md:text-lg font-semibold">Add cattle listing</span>
                </div>
                <p className="text-sm md:text-base md:text-center text-grey">We help you create a listing including breed, age, weight.</p>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-tertiary md:bg-transparent">
                <div className="flex items-center flex-row md:flex-col gap-2">
                  <span className="text-secondary text-lg md:text-4xl font-bold">4</span>
                  <span className="text-primary text-base md:text-lg font-semibold">Appear in our catalog</span>
                </div>
                <p className="text-sm md:text-base md:text-center text-grey">Thousands of nationwide buyers searching for livestock everyday!</p>
              </div>
            </div>
            <a className="z-10 text-white text-base text-center md:text-lg font-bold rounded-lg py-3 px-4 max-sm:w-full md:px-18 bg-secondary" aria-disabled="false" href="/register">Create Account</a>
            <img src={usCountry} alt="map" className="absolute z-0 object-contain sm:object-cover max-md:object-bottom object-top max-md:translate-y-9 lg:scale-x-110" style={{aspectRatio: '640 / 269'}} />
          </div>
        </section>

        <section className="container flex flex-col-reverse lg:flex-row items-start gap-[64px]">
          <div className="max-lg:self-center flex-shrink-0">
            <img className="hidden lg:block" src={tfmf} alt="Family" width="528" height="648" />
            <img className="lg:hidden" src={tfmfTwo} alt="Family" width="528" height="648" />
            <p className="text-center md:text-lg font-bold leading-[30px] max-md:pt-2">Joe Draper, happy Frontiers Market rancher</p>
          </div>

          <article className="flex flex-col gap-8 max-lg:items-center text-center md:text-left">
            <div>
              <p className="hidden md:block text-base text-secondary font-semibold uppercase">Who We Are</p>
              <p className="md:hidden text-base text-secondary font-semibold uppercase">Letter From The Founders</p>
              <h2 className="text-2xl leading-9 md:text-[36px] md:leading-12 text-primary font-archia font-semibold">The Frontiers Market Family</h2>
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-grey text-base md:text-lg md:leading-7">Frontiers Market got its start in Texas with one goal: provide farmers and ranchers with digital solutions to help them become more efficient, profitable, and competitive in national markets.</p>
              <p className="text-grey text-base md:text-lg md:leading-7">Our team of ranchers and tech innovators is helping build a stronger future for agriculture, as a trusted partner of operations across the country.</p>
              <p className="text-grey text-base md:text-lg md:leading-7">We are driven by the belief that agriculture is the backbone of this country and without farmers and ranchers creating a secure and independent food supply, there is no United States.</p>
            </div>
            <img className="max-md:w-[230px] pt-2" src={signature} alt="signature" width="322" height="64" />
          </article>
        </section>

        <img className="self-center" src={logo} alt="Logo company" width="104" height="56" />

        <section className="container">
          <div className="z-1 relative bg-livestock-pocket grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 rounded-lg">
            <div className="row-start-2 md:row-start-1 flex flex-col justify-between gap-1 md:pt-28 md:pl-8 lg:pb-9 lg:pl-16">
              <div className="z-1 max-md:px-4 flex flex-col gap-2 text-primary">
                <p className="font-medium leading-6 text-base md:text-xl md:font-semibold md:leading-8">Livestock in your pocket</p>
                <h2 className="font-archia font-semibold text-2xl leading-9 lg:text-[40px] lg:leading-10">Weigh your livestock <br/>with our free app</h2>
                <a className="flex items-center justify-center gap-2 mt-5 md:self-start font-bold text-base md:text-lg leading-7 bg-primary text-white rounded-lg px-4 py-3 md:px-9 md:py-4" href="/mobile-app">Get Early Access
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
              <div className="md:hidden flex self-center items-center gap-1 p-1 rounded-lg">
                <span className="text-primary font-medium text-base">Available on</span>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" color="#101828" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style={{color: 'rgb(16, 24, 40)'}}>
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z">
                  </path>
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z">
                  </path>
                </svg>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16" color="#8BC34A"
                  height="18" width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{color: 'rgb(139, 195, 74)'}}>
                  <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z">
                  </path>
                </svg>
              </div>
              <div className="rounded-b-lg flex items-center justify-center md:justify-start flex-row gap-2 bg-tertiary md:bg-transparent">
                <img
                  className="hidden lg:block"
                  src={ranchers}
                  alt="Ranchers"
                  width="84"
                  height="32" />
                <p className="flex items-center gap-1 text-grey text-base xlg:text-[20px] leading-8 font-semibold py-3">Trusted by the biggest U.S. ranchers
                  <img src={flag} width="24" height="24" alt="flag" />
                </p>
              </div>
            </div>
            <picture className="row-start-1 flex justify-center md:justify-end">
              <source className="rounded-lg" media="(max-width: 768px)" srcSet="/pocket_mobile.png" width="100%" />
              <img className="rounded-lg" src={pocketDesktop} alt="Phone" width="522" height="470" />
            </picture>
            <img className="max-md:hidden absolute object-fill object-top" src={map} alt="frame-desktop" style={{aspectRatio: '1120 / 470'}} />
          </div>
        </section>

      </main>

      <footer className="container flex flex-col gap-10 pt-16">

        <section className="flex flex-col gap-8 md:flex-row">
          <div className="flex flex-1 flex-col text-primary">
            <p className="text-borderGreen font-semibold text-base leading-10 md:text-lg md:leading-10">Let’s keep in touch!</p>
            <a className="font-archia font-semibold text-xl md:text-2xl leading-8 md:leading-9" href="mailto:info@frontiersmarket.com">info@frontiersmarket.com</a>
            <a className="font-archia font-semibold text-xl md:text-2xl leading-8 md:leading-9" href="tel:+1 512-387-4314">+1 512-387-4314</a>
          </div>
          <div className="flex flex-1 md:justify-end items-end gap-5">
            <a aria-label="facebook social link" href="https://www.facebook.com/FrontiersMarket">
              <svg stroke="currentColor" fill="#98A2B3" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                </path>
              </svg>
            </a>
            <a aria-label="instagram social link" href="https://www.instagram.com/frontiersmarket/">
              <svg stroke="currentColor" fill="#98A2B3" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                </path>
              </svg>
            </a>
            <a aria-label="linkedin social link" href="https://www.linkedin.com/company/frontiersmarket">
              <svg stroke="currentColor" fill="#98A2B3" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                </path>
              </svg>
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4 font-medium text-[#667085] border-t border-lightGrey py-8 md:flex-row md:justify-between">
          <div className="flex flex-row gap-4 text-sm">
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <p className="text-xs md:text-sm">Copyright © Frontiers Market 2023. All Rights Reserved.</p>
        </section>

      </footer>
    </div>
  );
}

export default Static;
