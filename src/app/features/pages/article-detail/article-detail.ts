import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-gray-50 pt-24 pb-16 px-4">

      <!-- Back button -->
      <div class="max-w-3xl mx-auto mb-6">
        <a routerLink="/articles"
           class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to Articles
        </a>
      </div>

      <div *ngIf="article" class="max-w-3xl mx-auto">

        <!-- Image -->
        <div class="rounded-2xl overflow-hidden mb-8 shadow-sm">
          <img [src]="article.image" [alt]="article.title"
               class="w-full h-72 object-cover" />
        </div>

        <!-- Meta -->
        <div class="flex items-center gap-3 mb-4 flex-wrap">
          <span class="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-full">
            {{ article.category }}
          </span>
          <span class="text-gray-400 text-sm">{{ article.date }}</span>
          <span class="text-gray-400 text-sm">· {{ article.readTime }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl font-bold text-gray-900 mb-3 leading-tight">
          {{ article.title }}
        </h1>

        <!-- Author -->
        <div class="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
          <div class="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500
                      flex items-center justify-center text-white font-bold text-sm">
            {{ article.author[0] }}
          </div>
          <div>
            <div class="font-medium text-gray-900 text-sm">{{ article.author }}</div>
            <div class="text-gray-400 text-xs">Holistic Nutrition Specialist</div>
          </div>
        </div>

        <!-- Content -->
        <div class="prose prose-gray max-w-none">
          <p *ngFor="let paragraph of getParagraphs()"
             class="text-gray-700 leading-relaxed mb-5 text-base">
            {{ paragraph }}
          </p>
        </div>

        <!-- CTA -->
        <div class="mt-12 p-6 bg-gradient-to-r from-teal-50 to-blue-50
                    rounded-2xl border border-teal-100 text-center">
          <h3 class="font-semibold text-gray-900 mb-2">Ready to start your wellness journey?</h3>
          <p class="text-gray-500 text-sm mb-4">Book a consultation with Dr. Ahmed Mukhtar</p>
          <a routerLink="/book-appointment"
             class="inline-block px-6 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600
                    text-white rounded-xl text-sm font-medium hover:opacity-90 transition-opacity">
            Book Appointment
          </a>
        </div>

      </div>

      <!-- Not found -->
      <div *ngIf="!article" class="max-w-3xl mx-auto text-center py-20 text-gray-400">
        <div class="text-5xl mb-4">📄</div>
        <p class="font-medium">Article not found</p>
        <a routerLink="/articles" class="text-teal-600 text-sm mt-2 inline-block hover:underline">
          Back to Articles
        </a>
      </div>

    </div>
  `
})
export class ArticleDetailComponent implements OnInit {
  article: Article | undefined;

  private articles: Article[] = [
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
    {
      id: 4,
      title: 'Type 2 Diabetes: Prevention Strategies',
      category: 'Diabetes',
      author: 'Dr. Ahmed Mukhtar',
      date: 'Jan 20, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      content: `Type 2 diabetes is largely preventable, yet its prevalence continues to rise globally. Understanding the prevention strategies can make a significant difference in your long-term health.

The foundation of prevention is maintaining a healthy weight. Excess body fat — particularly around the abdomen — is strongly linked to insulin resistance, the hallmark of type 2 diabetes.

Physical activity is crucial. Muscle tissue is a major site of glucose uptake, and regular exercise improves insulin sensitivity. Both aerobic exercise and resistance training are beneficial — aim for at least 150 minutes of moderate activity per week.

Dietary choices matter enormously. Reducing refined carbohydrates and added sugars helps stabilize blood sugar levels. Focus on high-fiber foods, which slow glucose absorption and improve metabolic health.

Regular blood sugar screening is important, especially if you have risk factors such as family history, overweight, sedentary lifestyle, or age over 45. Prediabetes — elevated blood sugar that has not yet reached diabetic levels — is a critical window for intervention.

Sleep quality also affects blood sugar regulation. Poor sleep disrupts hormones that control appetite and glucose metabolism, increasing diabetes risk.`,
    },
    {
      id: 5,
      title: 'The Benefits of Walking 30 Minutes Daily',
      category: 'Fitness',
      author: 'Dr. Ahmed Mukhtar',
      date: 'Jan 18, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
      content: `Walking is one of the most underrated forms of exercise. Simple, free, and accessible to nearly everyone, a daily 30-minute walk can transform your health in profound ways.

Cardiovascular benefits are significant. Regular walking lowers blood pressure, improves cholesterol levels, and reduces the risk of heart disease and stroke. Even at a moderate pace, walking gets the heart pumping and improves circulation.

Weight management is another key benefit. A 30-minute walk burns approximately 150 calories, and over time this contributes meaningfully to weight control. More importantly, walking helps preserve lean muscle mass while reducing fat.

Mental health improvements are well documented. Walking, particularly in natural environments, reduces cortisol levels, alleviates symptoms of depression and anxiety, and improves mood. The rhythmic movement has a meditative quality that calms the mind.

Bone density is supported by weight-bearing exercise like walking, reducing osteoporosis risk. Joint health also improves as walking lubricates cartilage and strengthens surrounding muscles.

The key is consistency. A daily walk — even if split into shorter sessions — provides cumulative benefits that compound over time.`,
    },
    {
      id: 6,
      title: 'High Blood Pressure: What You Need to Know',
      category: 'Cardiology',
      author: 'Dr. Ahmed Mukhtar',
      date: 'Jan 15, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop',
      content: `High blood pressure, or hypertension, is often called the "silent killer" because it typically has no symptoms until serious damage has occurred. Understanding and managing it is essential for long-term health.

Blood pressure is measured in millimeters of mercury (mmHg) and recorded as two numbers. Normal blood pressure is below 120/80 mmHg. Readings consistently at or above 130/80 mmHg indicate hypertension.

Lifestyle modifications are the first line of treatment. The DASH diet — rich in fruits, vegetables, whole grains, and low-fat dairy, while limiting sodium, red meat, and added sugars — has been shown to reduce blood pressure significantly.

Sodium reduction is particularly important. Most people consume far more sodium than recommended. Limiting processed foods, cooking at home, and reading labels can make a substantial difference.

Regular physical activity, stress management, limiting alcohol, and avoiding tobacco all contribute to blood pressure control. Maintaining a healthy weight is also critical, as even modest weight loss can reduce blood pressure meaningfully.

Medication may be necessary for many people, particularly those with very high readings or additional cardiovascular risk factors. Regular monitoring and working closely with your healthcare provider ensures optimal management.`,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articles.find(a => a.id === id);
  }

  getParagraphs(): string[] {
    return this.article?.content.split('\n\n').filter(p => p.trim()) ?? [];
  }
}