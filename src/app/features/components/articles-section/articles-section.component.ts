import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-articles-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './articles-section.component.html',
  styleUrls: ['./articles-section.component.scss']
})
export class ArticlesSectionComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Understanding Heart Disease Risk Factors',
      category: 'Cardiology',
      author: 'Dr. Ahmed Mukhtar',
      date: 'Jan 28, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=500&fit=crop',
      content: `Heart disease remains the leading cause of death worldwide. Understanding the risk factors is the first step toward prevention and better cardiovascular health.

Key risk factors include high blood pressure, high cholesterol, smoking, obesity, physical inactivity, diabetes, and family history. Many of these are modifiable through lifestyle changes.

Regular exercise — even 30 minutes of brisk walking daily — significantly reduces cardiovascular risk. Combined with a heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins, you can dramatically lower your risk.

Stress management is equally important. Chronic stress elevates cortisol levels, which can raise blood pressure and contribute to arterial inflammation. Mindfulness, meditation, and adequate sleep are powerful tools in your cardiovascular health arsenal.

Regular health screenings are essential. Knowing your numbers — blood pressure, cholesterol, blood sugar — allows for early intervention before problems escalate.`,
    },
    {
      id: 2,
      title: 'The Mediterranean Diet: A Complete Guide',
      category: 'Nutrition',
      author: 'Dr. Ahmed Mukhtar',
      date: 'Jan 25, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
      content: `The Mediterranean diet is consistently ranked as one of the healthiest dietary patterns in the world. It is inspired by the traditional eating habits of countries bordering the Mediterranean Sea.

At its core, the diet emphasizes abundant plant foods: fruits, vegetables, whole grains, legumes, nuts, and seeds. Olive oil is the primary source of added fat, providing heart-healthy monounsaturated fats and antioxidants.

Fish and seafood are consumed frequently — at least twice a week — providing omega-3 fatty acids that reduce inflammation and support brain health. Poultry, eggs, and dairy are consumed in moderate amounts, while red meat is limited.

Research consistently shows that following a Mediterranean diet reduces the risk of heart disease, stroke, type 2 diabetes, and cognitive decline. It has also been associated with reduced cancer risk and longer life expectancy.

The social and lifestyle aspects are equally important. Meals are enjoyed slowly, with family and friends, which supports both physical and mental wellbeing.`,
    },
    {
      id: 3,
      title: 'Managing Anxiety in Daily Life',
      category: 'Mental Health',
      author: 'Dr. Ahmed Mukhtar',
      date: 'Jan 22, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop',
      content: `Anxiety affects millions of people worldwide, yet many go without proper support or management strategies. Understanding anxiety is the first step toward managing it effectively.

Anxiety is a natural stress response, but when it becomes chronic and interferes with daily functioning, it requires attention. Symptoms include persistent worry, restlessness, difficulty concentrating, and physical manifestations like rapid heartbeat or tension.

Deep breathing exercises are among the most powerful immediate tools. The 4-7-8 technique — inhale for 4 counts, hold for 7, exhale for 8 — activates the parasympathetic nervous system and calms the stress response.

Regular physical activity is a cornerstone of anxiety management. Exercise releases endorphins and reduces levels of stress hormones. Even a 20-minute walk can produce significant anxiety relief.

Nutrition plays a role too. Excessive caffeine and alcohol can worsen anxiety symptoms. A balanced diet rich in magnesium, B vitamins, and omega-3s supports nervous system health.

Professional support — whether through therapy, counseling, or medical treatment — is important when anxiety significantly impacts quality of life. Cognitive behavioral therapy (CBT) is particularly effective.`,
    },
    
   
    
  ];
}
