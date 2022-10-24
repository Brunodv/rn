import { FacebookEmbed } from 'react-social-media-embed';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import image from "../media/logo7.png";
import { DivRedes , H4Styled,DivRed1,ImgStyled} from '../components/appStyled';

export default function Redes(){
    return <>
    <DivRedes>

      <DivRed1 style={{ display: 'flex', justifyContent: 'center', margin:'30px'}}>
        <TikTokEmbed url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"  />
      </DivRed1>       

      <DivRed1 style={{ display: 'flex', justifyContent: 'center', margin:'30px'}}>
        <FacebookEmbed url="https://www.facebook.com/permalink.php?story_fbid=pfbid02aBCgjzvgSyqX5eVkLKUFSwKACkHTu8isp3ZmED7KeXwCHsNMDjhMVuoauXFYVowml&id=100009684617241"  />
      </DivRed1>

      <DivRed1 style={{ display: 'flex', justifyContent: 'center', margin:'30px'}}>
        <InstagramEmbed url="https://www.instagram.com/p/Ci1kAwDAM1C/" />
      </DivRed1>

</DivRedes>     
</>;
}