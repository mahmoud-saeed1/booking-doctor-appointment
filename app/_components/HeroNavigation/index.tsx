import { Button } from "@/components/ui/button";
import { Arrow } from "@/app/_icons";
import IconContainer from "../IconContainer";
import "./index.css";
import { IHeroNavigationProps } from "@/app/_interfaces";

const HeroNavigation: React.FC<IHeroNavigationProps> = ({ onPrev, onNext }) => (
  <div className="hero-navigation-container hidden md:flex">
    <Button onClick={onPrev} className="hero-nav-button">
      <IconContainer>
        <Arrow />
      </IconContainer>
    </Button>
    <Button onClick={onNext} className="hero-nav-button">
      <IconContainer>
        <Arrow className="rotate-180" />
      </IconContainer>
    </Button>
  </div>
);

export default HeroNavigation;
