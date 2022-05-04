import './MainBanner.scss';

export default function MainBanner(props: any) {
  const url = '/images/' + props.url;
  const title = props.title;
  const mcontent = props.mcontent;
  const scontent: string = props.scontent;
  return (
    <div className="banner_wrap">
      <div className="banner_img">
        <img src={url} alt="" />
        <h3 className="preline">
          {title.replaceAll(
            '<br/>',
            ` 
      `
          )}
        </h3>
      </div>
      <h4 className="preline">
        {mcontent.replaceAll(
          '<br/>',
          ` 
      `
        )}
      </h4>
      <p className="preline">
        {scontent.replaceAll(
          '<br/>',
          ` 
      `
        )}
      </p>
      <div className="btn_wrap">
        <a className="btn">
          <h1>More</h1>
        </a>
      </div>
    </div>
  );
}
