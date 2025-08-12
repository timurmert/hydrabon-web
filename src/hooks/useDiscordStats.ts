'use client';

import { useState, useEffect } from 'react';
import { CommunityStats } from '@/types';

interface DiscordStatsResponse extends Omit<CommunityStats, 'roles' | 'channels'> {
  monthlyMessages?: string;
  lastUpdated: string;
  error?: string;
}

export const useDiscordStats = () => {
  const [stats, setStats] = useState<DiscordStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/discord/stats');
      
      if (!response.ok) {
        throw new Error('Failed to fetch Discord stats');
      }

      const data = await response.json();
      setStats(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Discord stats fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Sadece ilk yüklemede çek
    fetchStats();
  }, []);

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
  };
};