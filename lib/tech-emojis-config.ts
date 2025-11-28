// Technology emoji mapping
export const techEmojisConfig: Record<string, string> = {
  react: '⚛️',
  angular: '🅰️',
  vue: '💚',
  nextjs: '▲',
  nuxtjs: '🟢',
  tailwindcss: '🎨',
  nodejs: '🟢',
  expressjs: '⚡',
  nestjs: '🪺',
  python: '🐍',
  typescript: '📘',
  flutter: '🦋',
  reactnative: '⚛️',
  ionic: '⚡',
  aws: '☁️',
  docker: '🐳',
  kubernetes: '☸️',
  firebase: '🔥',
  mongodb: '🍃',
  postgresql: '🐘',
  graphql: '📊',
  tensorflow: '🤖',
  microservices: '🔗',
};

export function getTechEmoji(techName: string): string {
  const techKey = techName
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/\.js$/i, '')
    .replace(/-/g, '');
  
  return techEmojisConfig[techKey] || '💻';
}
