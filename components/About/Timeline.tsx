import Image from "next/image";

const timelineData = [
  {
    text: 'Started working on a new project',
    date: 'July 15 2023',
    category: {
      tag: 'project',
      color: '#FFDB14'
    },
    link: {
      url: 'https://github.com/yourusername/project',
      text: 'Check it out on GitHub'
    }
  },
  {
    text: 'Attended a tech conference',
    date: 'August 02 2023',
    category: {
      tag: 'conference',
      color: '#e17b77'
    },
    link: {
      url: 'https://techconf.com',
      text: 'Conference details'
    }
  },
  {
    text: 'Reached 5,000 followers on Instagram',
    date: 'August 18 2023',
    category: {
      tag: 'instagram',
      color: '#C13584'
    },
    link: {
      url: 'https://instagram.com/yourusername',
      text: 'See profile'
    }
  },
  {
    text: 'Published a blog post on web development',
    date: 'September 10 2023',
    category: {
      tag: 'blog',
      color: '#3498db'
    },
    link: {
      url: 'https://yourblog.com/web-development',
      text: 'Read the post'
    }
  }
];

interface TimelineItemProps {
  data: {
    text: string;
    date: string;
    category: {
      tag: string;
      color: string;
    };
    link?: {
      url: string;
      text: string;
    };
  };
}

const TimelineItem: React.FC<TimelineItemProps> = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

const Timeline: React.FC = () => (
  <div className="container mx-auto py-8 px-4">
    <h1 className="text-3xl font-bold text-center mb-8">Timeline</h1>
    <>
    {timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )}
  </>
  </div>
);

export default Timeline;
