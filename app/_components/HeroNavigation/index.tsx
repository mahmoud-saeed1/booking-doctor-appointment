import { Button } from "@/components/ui/button";
import { Arrow } from "@/app/_icons";
import IconContainer from "../IconContainer";
import { IHeroNavigationProps } from "@/app/_interfaces";
import "./index.css";

const HeroNavigation: React.FC<IHeroNavigationProps> = ({ onPrev, onNext }) => (
  <div className="hero-navigation-container">
    <Button onClick={onPrev} className="hero-nav-button" aria-label="Previous slide">
      <IconContainer>
        <Arrow />
      </IconContainer>
    </Button>
    <Button onClick={onNext} className="hero-nav-button" aria-label="Next slide">
      <IconContainer>
        <Arrow className="rotate-180" />
      </IconContainer>
    </Button>
  </div>
);

export default HeroNavigation;
