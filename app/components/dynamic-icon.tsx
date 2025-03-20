import React, { useState, useEffect } from "react";

interface DynamicIconProps {
  iconName: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName }) => {
  const [IconComponent, setIconComponent] = useState<React.ElementType | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const bsIcons = (await import("react-icons/bs")) as unknown as Record<string, React.ElementType>;
        const faIcons = (await import("react-icons/fa")) as unknown as Record<string, React.ElementType>;
        var Icon = bsIcons[iconName];
        if (!Icon) {
          Icon = faIcons[iconName];
        } 
        

        if (Icon) {
          setIconComponent(() => Icon);
        } else {
          console.error(`Icon "${iconName}" not found`);
          setIconComponent(null);
        }
      } catch (error) {
        console.error(`Error loading icon "${iconName}"`, error);
        setIconComponent(null);
      }
    };

    loadIcon();
  }, [iconName]);

  return IconComponent ? <IconComponent /> : '';
};

export default DynamicIcon;

