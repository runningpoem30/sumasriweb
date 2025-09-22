import { LucideIcon } from 'lucide-react';

interface StrengthCardProps {
  icon: LucideIcon;
  title: string;
}

const StrengthCard = ({ icon: Icon, title }: StrengthCardProps) => {
  return (
    <div className="bg-gradient-card rounded-lg p-6 text-center hover:shadow-card transition-all duration-300 border border-border">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
  );
};

export default StrengthCard;