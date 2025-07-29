
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  title: string;
  description: string;
  image: string;
  tutorCount: number;
  category: string;
  gradient?: string;
  slug?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  description, 
  image, 
  tutorCount, 
  category,
  gradient = "from-primary/10 to-secondary/10",
  slug
}) => {
  return (
    <Card className="group hover-glow transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer overflow-hidden bg-card-gradient border-border/20 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10`}></div>
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 z-20">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">
              {tutorCount} Expert Tutors
            </span>
            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
              Popular
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
