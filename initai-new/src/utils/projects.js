// utils/projects.js
/**
 * Parses markdown in the standardized format:
 * ## Number. Title
 * **Problem Statement:**
 * Description text
 * 
 * **Team Members:**
 * - Member 1
 * - Member 2
 * 
 * **Links:**
 * - Live: url
 * - Paper: url
 * - Image: url
 * 
 * ---
 */

export function getProjectsFromMarkdown(markdownContent) {
  if (!markdownContent || typeof markdownContent !== 'string') {
    console.error('Invalid markdown content');
    return [];
  }

  const projects = [];
  
  // Hardcoded 16 unique images suitable for AI/ML research projects
  const aiMlImages = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', // AI/Neural network visualization
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop', // Data science/analytics
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop', // AI robot/technology
    'https://images.unsplash.com/photo-1655635949384-f737c5133dfe?w=600&h=400&fit=crop', // Machine learning code
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop', // Technology/circuits
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop', // Data visualization
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop', // AI brain concept
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop', // Network/connectivity
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop', // Computer vision/camera
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop', // Technology background
    'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&h=400&fit=crop', // Code/programming
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', // Charts/analytics
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop', // Laptop/coding
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop', // Technology workspace
    'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=600&h=400&fit=crop', // Futuristic tech
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'  // Tech devices
  ];
  
  const getRandomImageUrl = (index) => {
    // Cycle through the 16 hardcoded images
    return aiMlImages[index % aiMlImages.length];
  };
  
  // Normalize line endings
  const normalized = markdownContent.replace(/\r\n/g, '\n');
  
  // Split by horizontal rules (---) or by project headers
  const sections = normalized.split(/(?=^##\s+\d+\.)/m).filter(s => s.trim());
  
  sections.forEach((section, index) => {
    // Skip if section doesn't start with ##
    if (!section.trim().startsWith('##')) return;
    
    try {
      // Extract title
      const titleMatch = section.match(/^##\s+\d+\.\s+(.+?)$/m);
      if (!titleMatch) return;
      const title = titleMatch[1].trim();
      
      // Extract problem statement
      const psMatch = section.match(/\*\*Problem Statement:\*\*\s*([\s\S]+?)(?=\*\*Team Members:|\*\*Links:|$)/);
      const problemStatement = psMatch ? psMatch[1].trim() : '';
      
      // Extract team members
      const tmMatch = section.match(/\*\*Team Members:\*\*\s*([\s\S]+?)(?=\*\*Links:|---|\*\*|$)/);
      let teamMembers = [];
      
      if (tmMatch) {
        teamMembers = tmMatch[1]
          .split('\n')
          .map(line => line.trim())
          .filter(line => line.startsWith('-'))
          .map(line => line.replace(/^-\s*/, '').trim())
          .filter(member => member.length > 0);
      }
      
      // Extract links
      const linksMatch = section.match(/\*\*Links:\*\*\s*([\s\S]+?)(?=---|$)/);
      let liveLink = '#';
      let paperLink = null;
      let imageUrl = null;
      
      if (linksMatch) {
        const linksSection = linksMatch[1];
        
        // Extract Live link
        const liveMatch = linksSection.match(/[•\-*]\s*Live:\s*(.+?)$/m);
        if (liveMatch) {
          liveLink = liveMatch[1].trim();
        }
        
        // Extract Paper link
        const paperMatch = linksSection.match(/[•\-*]\s*Paper:\s*(.+?)$/m);
        if (paperMatch) {
          const paperUrl = paperMatch[1].trim();
          if (paperUrl !== '#' && paperUrl !== '') {
            paperLink = paperUrl;
          }
        }
        
        // Extract Image link
        const imageMatch = linksSection.match(/[•\-*]\s*Image:\s*(.+?)$/m);
        if (imageMatch) {
          const imgUrl = imageMatch[1].trim();
          if (imgUrl !== '#' && imgUrl !== '') {
            imageUrl = imgUrl;
          } else {
            // If no image URL is provided, generate a unique one
            imageUrl = getRandomImageUrl(index);
          }
        } else {
          // If no image tag is found, generate a unique image
          imageUrl = getRandomImageUrl(index);
        }
      } else {
        // If no links section is found, generate a unique image
        imageUrl = getRandomImageUrl(index);
      }
      
      // Generate a unique image for this project
      const projectImage = imageUrl || getRandomImageUrl(index);
      
      projects.push({
        title,
        thumbnail: projectImage,
        link: liveLink,
        problemStatement,
        teamMembers,
        paperLink
      });
      
    } catch (error) {
      console.error(`Error parsing project ${index}:`, error);
    }
  });
  
  console.log(`✅ Successfully parsed ${projects.length} projects`);
  
  // Log summary
  projects.forEach((p, i) => {
    console.log(`${i + 1}. ${p.title} - ${p.teamMembers.length} members`);
  });
  
  return projects;
}

// Helper to validate markdown format
export function validateMarkdownFormat(markdownContent) {
  const issues = [];
  
  const projectHeaders = (markdownContent.match(/^##\s+\d+\./gm) || []).length;
  const problemStatements = (markdownContent.match(/\*\*Problem Statement:\*\*/g) || []).length;
  const teamMembers = (markdownContent.match(/\*\*Team Members:\*\*/g) || []).length;
  const links = (markdownContent.match(/\*\*Links:\*\*/g) || []).length;
  
  console.log('=== FORMAT VALIDATION ===');
  console.log('Project headers (##):', projectHeaders);
  console.log('Problem Statements:', problemStatements);
  console.log('Team Members sections:', teamMembers);
  console.log('Links sections:', links);
  
  if (projectHeaders !== problemStatements) {
    issues.push(`Mismatch: ${projectHeaders} headers but ${problemStatements} problem statements`);
  }
  
  if (projectHeaders !== teamMembers) {
    issues.push(`Mismatch: ${projectHeaders} headers but ${teamMembers} team member sections`);
  }
  
  if (issues.length > 0) {
    console.warn('⚠️ Format issues found:', issues);
  } else {
    console.log('✅ Format looks good!');
  }
  
  return { projectHeaders, problemStatements, teamMembers, links, issues };
}