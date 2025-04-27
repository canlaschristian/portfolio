import { Injectable } from '@angular/core';
import { Skill, Project, Testimonial, Experience, Education, SocialLink } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSkills(): Skill[] {
    return [
      { id: 1, name: 'Angular', level: 'Expert', progress: 90, icon: 'code' },
      { id: 2, name: 'TypeScript', level: 'Advanced', progress: 85, icon: 'javascript' },
      { id: 3, name: 'HTML/CSS', level: 'Expert', progress: 95, icon: 'html' },
      { id: 4, name: 'Node.js', level: 'Intermediate', progress: 70, icon: 'settings' },
      { id: 5, name: 'RxJS', level: 'Advanced', progress: 80, icon: 'sync' },
      { id: 6, name: 'Git', level: 'Advanced', progress: 85, icon: 'code_branch' },
      { id: 7, name: 'NgRx', level: 'Intermediate', progress: 75, icon: 'storage' },
      { id: 8, name: 'Jest', level: 'Intermediate', progress: 70, icon: 'verified' },
      { id: 9, name: 'Docker', level: 'Basic', progress: 60, icon: 'settings_applications' }
    ];
  }

  getProjects(): Project[] {
    return [
      { 
        id: 1, 
        title: 'E-commerce Platform', 
        description: 'A full-featured e-commerce platform with product listings, cart, checkout, and admin dashboard.', 
        technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'], 
        imageUrl: 'assets/images/project1.jpg',
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://ecommerce-demo.com',
        features: [
          'Responsive design',
          'JWT authentication',
          'Product search and filtering',
          'Payment integration'
        ]
      },
      { 
        id: 2, 
        title: 'Task Management App', 
        description: 'A Kanban-style task management application with drag-and-drop functionality.', 
        technologies: ['Angular', 'Firebase', 'NgRx'], 
        imageUrl: 'assets/images/project2.jpg',
        githubUrl: 'https://github.com/username/task-manager',
        features: [
          'Real-time updates',
          'Drag and drop interface',
          'User authentication',
          'State management with NgRx'
        ]
      },
      { 
        id: 3, 
        title: 'Weather Dashboard', 
        description: 'Weather application showing current conditions and forecasts with interactive maps.', 
        technologies: ['Angular', 'OpenWeather API', 'Leaflet.js'], 
        imageUrl: 'assets/images/project3.jpg',
        liveUrl: 'https://weather-demo.com',
        features: [
          'Location-based weather',
          'Interactive maps',
          '5-day forecast',
          'Unit conversion'
        ]
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        name: 'Jane Smith',
        role: 'Product Manager',
        company: 'TechCorp',
        content: 'John delivered our project ahead of schedule with excellent quality. His Angular expertise was invaluable in solving complex frontend challenges.',
        avatar: 'assets/images/testimonial1.jpg'
      },
      {
        id: 2,
        name: 'Michael Johnson',
        role: 'CTO',
        company: 'StartUp Inc.',
        content: 'We hired John to rebuild our frontend with Angular, and the results exceeded our expectations. His clean code and architecture decisions saved us countless hours of maintenance.',
        avatar: 'assets/images/testimonial2.jpg'
      },
      {
        id: 3,
        name: 'Sarah Williams',
        role: 'UX Lead',
        company: 'DesignHub',
        content: 'Working with John was a pleasure. He understands the importance of combining good UX with technical excellence, and his implementation was pixel-perfect.',
        avatar: 'assets/images/testimonial3.jpg'
      }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        id: 1,
        position: 'Application Developer',
        company: 'Tech Solutions Inc.',
        period: '2020 - Present',
        responsibilities: [
          'Lead frontend development using Angular for enterprise applications',
          'Mentor junior developers and conduct code reviews',
          'Implement CI/CD pipelines and testing strategies',
          'Collaborate with UX designers to implement responsive interfaces'
        ],
        logo: 'assets/images/company1.png'
      },
      {
        id: 2,
        position: 'Frontend Developer',
        company: 'WebWorks Agency',
        period: '2018 - 2020',
        responsibilities: [
          'Developed client websites and web applications using Angular',
          'Worked closely with clients to gather requirements',
          'Optimized applications for performance and SEO',
          'Integrated with various REST APIs'
        ],
        logo: 'assets/images/company2.png'
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        id: 1,
        degree: 'MSc in Computer Science',
        institution: 'State University',
        year: '2018',
        fieldOfStudy: 'Software Engineering',
        description: 'Specialized in web technologies and human-computer interaction'
      },
      {
        id: 2,
        degree: 'BSc in Information Technology',
        institution: 'City College',
        year: '2016',
        fieldOfStudy: 'Web Development',
        description: 'Graduated with honors'
      }
    ];
  }

  getSocialLinks(): SocialLink[] {
    return [
      { name: 'GitHub', url: 'https://github.com/username', icon: 'fa-github', color: '#333' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'fa-linkedin', color: '#0077B5' },
      { name: 'Twitter', url: 'https://twitter.com/username', icon: 'fa-twitter', color: '#1DA1F2' },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com/users/username', icon: 'fa-stack-overflow', color: '#F48024' }
    ];
  }
}