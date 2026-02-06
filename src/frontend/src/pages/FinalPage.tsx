import { Card } from '@/components/ui/card';
import AnimatedPromptText from '../components/AnimatedPromptText';

export default function FinalPage() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="glass-card p-8 md:p-12 rounded-3xl shadow-valentine border-valentine-pink/20">
        <div className="text-center space-y-8">
          {/* Animated headline */}
          <AnimatedPromptText
            text="I knew you'd say YES ❤️"
            className="text-4xl md:text-6xl font-bold gradient-text leading-tight"
            useTypingEffect={false}
          />

          {/* Couple illustration */}
          <div className="py-6 flex justify-center">
            <div className="animate-gentle-pulse">
              <img
                src="/assets/generated/valentine-couple.dim_800x600.png"
                alt="Romantic couple illustration"
                className="rounded-3xl shadow-valentine max-w-full h-auto"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>

          {/* Bottom message */}
          <p className="text-2xl md:text-3xl font-medium text-foreground animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            You've made me the happiest 💕
          </p>
        </div>
      </Card>
    </div>
  );
}

