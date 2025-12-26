import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from '@/components/BlurText';
import { ProjectInfoProps } from './ProjectLink';
import { getIcon } from '@/components/icon';
import Tooltip from '@/components/custom-ui/Tooltip';
import Link from '@/components/custom-ui/Link';
import Badge from '@/components/badge/Badge';
import Button from '@/components/custom-ui/Button';
import { updateProjectReadme } from '@/client-side/galaxy';
import { authClient } from '@/client-side/auth';
import type { AuthUser } from '@/types/auth';

interface ProjectLandingHeroProps {
  projectData: ProjectInfoProps;
  projectUri?: string; // Project issues URI
  githubUrl?: string; // GitHub repository URL
  blockchainExplorerUrl?: string; // Blockchain explorer address URL
  documentationUrl?: string; // Documentation link URL
  readmeContent?: string;
  readmeUpdateTime?: number;
  readmeUrl?: string;
  tags?: string[];
  projectId?: string;
}

const ProjectLandingHero: React.FC<ProjectLandingHeroProps> = ({
  projectData,
  projectUri,
  githubUrl,
  blockchainExplorerUrl,
  documentationUrl,
  readmeContent,
  readmeUpdateTime,
  readmeUrl,
  tags,
  projectId,
}) => {
  const { title, description } = projectData;
  const [showReadme, setShowReadme] = useState(false);
  const [isFetchingReadme, setIsFetchingReadme] = useState(false);
  const [currentReadmeContent, setCurrentReadmeContent] = useState(readmeContent || '');
  const [currentReadmeUpdateTime, setCurrentReadmeUpdateTime] = useState(readmeUpdateTime);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const session = await authClient.getSession();
      setIsAuthenticated(!!session?.data?.user);
    };
    checkAuth();
  }, []);

  // Simple markdown renderer (similar to BlogPanel)
  const renderMarkdown = (content: string) => {
    if (!content) return '';

    let html = content
      // Code blocks first
      .replace(/```(\w+)?\n?([\s\S]*?)```/gim, (match, lang, code) => {
        return `<pre class="bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-x-auto my-4"><code class="text-sm">${code.trim()}</code></pre>`;
      })
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold mt-6 mb-3 text-slate-800 dark:text-slate-200">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mt-8 mb-4 text-slate-800 dark:text-slate-200">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mt-10 mb-5 text-slate-800 dark:text-slate-200">$1</h1>')
      // Bold
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>')
      // Inline code
      .replace(/`([^`\n]+)`/gim, '<code class="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // Line breaks
      .split(/\n\n+/)
      .map(para => para.trim())
      .filter(para => para.length > 0)
      .map(para => {
        para = para.replace(/\n/g, '<br>');
        return `<p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-300">${para}</p>`;
      })
      .join('');

    return html || '<p>No content</p>';
  };

  const handleFetchAgain = async () => {
    if (!projectId) return;
    
    setIsFetchingReadme(true);
    try {
      const result = await updateProjectReadme(projectId);
      if (result.success && result.data) {
        setCurrentReadmeContent(result.data.readmeContent || '');
        setCurrentReadmeUpdateTime(result.data.readmeUpdateTime);
        // If README was fetched successfully and we're viewing description, show success
        if (!showReadme && result.data.readmeContent) {
          // Optionally show a success message or auto-switch to README view
        }
      } else {
        alert(result.error || 'Failed to fetch README. Make sure you are the project maintainer.');
      }
    } catch (error) {
      console.error('Error fetching README:', error);
      alert('An error occurred while fetching README. Please try again.');
    } finally {
      setIsFetchingReadme(false);
    }
  };

  const formatUpdateTime = (timestamp?: number) => {
    if (!timestamp) return 'Unknown';
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 px-4 relative">
      {/* Project Title with Blur Text Animation and Floating Tags */}
      <div className="w-full max-w-4xl relative">
        <BlurText
          text={title}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 dark:text-slate-200 justify-center"
          animateBy="words"
          direction="top"
          delay={100}
        />
        {/* Floating Tags */}
        {tags && tags.length > 0 && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 w-full">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="purple"
                className="text-xs px-2 py-1 opacity-80 hover:opacity-100 transition-opacity"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Icons for Sunshines and Action Links */}
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {/* Issues Link */}
        {projectUri && (
          <Link uri={projectUri} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
            <Tooltip content="Show project issues">
              <div className="flex items-center gap-2">
                {getIcon({ iconType: 'ara', className: 'w-5 h-5 text-blue-500' })}
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Issues</span>
              </div>
            </Tooltip>
          </Link>
        )}

        {/* GitHub Source Link */}
        {githubUrl && (
          <Link uri={githubUrl} asNewTab={true} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
            <Tooltip content="Source">
              <div className="flex items-center gap-2">
                {getIcon({ iconType: 'github', className: 'w-5 h-5 text-slate-700 dark:text-slate-300' })}
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Source</span>
              </div>
            </Tooltip>
          </Link>
        )}

        {/* Blockchain Explorer Link */}
        {blockchainExplorerUrl && (
          <Link uri={blockchainExplorerUrl} asNewTab={true} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
            <Tooltip content="Blockchain Explorer">
              <div className="flex items-center gap-2">
                {getIcon({ iconType: 'wallet', className: 'w-5 h-5 text-blue-500' })}
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Explorer</span>
              </div>
            </Tooltip>
          </Link>
        )}

        {/* Documentation Link */}
        {documentationUrl && (
          <Link uri={documentationUrl} asNewTab={true} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 dark:bg-slate-900/10 backdrop-blur-sm border border-slate-200/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-900/20 transition-colors">
            <Tooltip content="Documentation">
              <div className="flex items-center gap-2">
                {getIcon({ iconType: 'new-file', className: 'w-5 h-5 text-purple-500' })}
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Docs</span>
              </div>
            </Tooltip>
          </Link>
        )}
      </div>

      {/* Description or README Content with Transitions */}
      <div className="w-full max-w-4xl relative min-h-[200px]">
        <AnimatePresence mode="wait">
          {!showReadme ? (
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {description && (
                <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  {description}
                </p>
              )}
              {/* Always show README section */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center gap-4">
                  {currentReadmeContent ? (
                    <Button
                      onClick={() => setShowReadme(true)}
                      variant="secondary"
                      outline={true}
                    >
                      View README
                    </Button>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        No README content available
                      </p>
                      {projectId && isAuthenticated && (
                        <Button
                          onClick={handleFetchAgain}
                          disabled={isFetchingReadme}
                          variant="secondary"
                          outline={true}
                        >
                          {isFetchingReadme ? 'Fetching README...' : 'Fetch README'}
                        </Button>
                      )}
                    </div>
                  )}
                  {projectId && isAuthenticated && currentReadmeContent && (
                    <Button
                      onClick={handleFetchAgain}
                      disabled={isFetchingReadme}
                      variant="secondary"
                      outline={true}
                      size="sm"
                    >
                      {isFetchingReadme ? 'Updating...' : 'Update README'}
                    </Button>
                  )}
                </div>
                {currentReadmeUpdateTime && (
                  <p className="text-xs text-center text-slate-500 dark:text-slate-400">
                    Last updated: {formatUpdateTime(currentReadmeUpdateTime)}
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="readme"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full text-left"
            >
              <div className="flex justify-between items-start mb-4">
                <Button
                  onClick={() => setShowReadme(false)}
                  variant="secondary"
                >
                  View short description
                </Button>
                {projectId && isAuthenticated && (
                  <Button
                    onClick={handleFetchAgain}
                    disabled={isFetchingReadme}
                    variant="success"
                  >
                    {isFetchingReadme ? 'Updating...' : 'Update README'}
                  </Button>
                )}
              </div>
              {currentReadmeUpdateTime && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Last updated: {formatUpdateTime(currentReadmeUpdateTime)}
                </p>
              )}
              {currentReadmeContent ? (
                <div
                  className="prose prose-slate dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(currentReadmeContent) }}
                />
              ) : (
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <p className="mb-4">No README content available</p>
                  {projectId && isAuthenticated && (
                    <Button
                      onClick={handleFetchAgain}
                      disabled={isFetchingReadme}
                      variant="success"
                    >
                      {isFetchingReadme ? 'Fetching README...' : 'Fetch README'}
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectLandingHero;

