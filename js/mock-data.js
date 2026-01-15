/**
 * QuantTool Mock Data & State Management
 * 策略市场数据与状态管理
 */

// ===== 数据结构定义 =====
// 市场策略状态: listed | unlisted | pending_review
// 我的策略状态: draft | saved | tested | running | paused | error
// 策略来源: user | market

const MOCK_MARKETPLACE_STRATEGIES = [
  {
    id: 'mkt_001',
    name: '网格套利大师',
    author: {
      id: 'author_001',
      nickname: 'CryptoMaster',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      verified: true,
      total_strategies: 12,
      total_subscribers: 3420
    },
    type: 'grid', // grid | trend | volatility | arbitrage | dca
    risk_level: 'balanced', // conservative | balanced | aggressive
    supported_exchanges: ['OKX', 'Binance', 'Bybit'],
    supported_pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT'],
    pricing: {
      type: 'subscription', // free | subscription | profit_share
      price_monthly: 29.99,
      share_ratio: null
    },
    stats: {
      subscribers: 1256,
      copies: 3420,
      reviews: 4.8,
      running_users: 892
    },
    performance: {
      backtest: {
        period: '2024-01-01 ~ 2024-12-31',
        return_total: 156.78,
        return_30d: 12.34,
        max_drawdown: -8.5,
        sharpe_ratio: 2.34,
        win_rate: 72.5,
        total_trades: 1456,
        monthly_returns: [8.5, 6.7, 13.2, 13.7, 13.7, -7.5, 24.3, 16.8, 13.1, 13.3, 12.76, 28.2]
      },
      live: {
        period: '2024-07-01 ~ 2025-01-15',
        return_total: 68.45,
        return_30d: 8.92,
        max_drawdown: -12.3,
        sharpe_ratio: 1.89,
        win_rate: 68.2,
        total_trades: 892,
        monthly_returns: [12.4, 15.6, -5.2, 18.9, 14.3, 12.5]
      }
    },
    description: {
      summary: '专为 BTC/ETH 震荡行情设计的智能网格策略，自动识别价格区间并在区间内高卖低买。',
      suitable_market: '震荡行情、横盘整理期',
      logic: '基于 ATR 和布林带自动计算网格区间，动态调整网格密度，支持止损止盈。',
      risk_warning: '趋势行情中可能产生浮亏，建议配合趋势指标使用。'
    },
    version: '2.1.0',
    changelog: [
      { version: '2.1.0', date: '2025-01-10', content: '优化网格密度算法，提升震荡行情收益' },
      { version: '2.0.0', date: '2024-11-15', content: '新增动态止损功能，降低趋势行情风险' },
      { version: '1.5.0', date: '2024-09-01', content: '支持多币对同时运行' }
    ],
    status: 'listed',
    created_at: '2024-06-15',
    updated_at: '2025-01-10'
  },
  {
    id: 'mkt_002',
    name: '趋势追踪者 Pro',
    author: {
      id: 'author_002',
      nickname: 'TrendHunter',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
      verified: true,
      total_strategies: 8,
      total_subscribers: 2100
    },
    type: 'trend',
    risk_level: 'aggressive',
    supported_exchanges: ['OKX', 'Binance'],
    supported_pairs: ['BTC/USDT', 'ETH/USDT'],
    pricing: {
      type: 'profit_share',
      price_monthly: null,
      share_ratio: 15
    },
    stats: {
      subscribers: 892,
      copies: 1560,
      reviews: 4.6,
      running_users: 456
    },
    performance: {
      backtest: {
        period: '2024-01-01 ~ 2024-12-31',
        return_total: 234.56,
        return_30d: 18.92,
        max_drawdown: -22.5,
        sharpe_ratio: 1.78,
        win_rate: 58.3,
        total_trades: 234,
        monthly_returns: [15.2, 22.4, -8.5, 28.6, 32.1, -12.4, 45.2, 28.9, 18.5, 22.1, 25.8, 16.6]
      },
      live: {
        period: '2024-09-01 ~ 2025-01-15',
        return_total: 89.23,
        return_30d: 15.67,
        max_drawdown: -18.9,
        sharpe_ratio: 1.56,
        win_rate: 55.8,
        total_trades: 156,
        monthly_returns: [22.4, -8.5, 35.2, 28.9, 11.2]
      }
    },
    description: {
      summary: '基于多周期趋势识别的自动交易策略，擅长捕捉大趋势行情。',
      suitable_market: '单边趋势行情、突破行情',
      logic: '结合 EMA、MACD、RSI 多指标共振，趋势确认后入场，移动止损保护利润。',
      risk_warning: '震荡行情可能频繁止损，建议资金管理不超过总仓位 30%。'
    },
    version: '3.0.1',
    changelog: [
      { version: '3.0.1', date: '2025-01-05', content: '修复极端行情下的止损触发问题' },
      { version: '3.0.0', date: '2024-12-01', content: '全新趋势识别算法，提升胜率' }
    ],
    status: 'listed',
    created_at: '2024-03-20',
    updated_at: '2025-01-05'
  },
  {
    id: 'mkt_003',
    name: '稳健 DCA 定投',
    author: {
      id: 'author_003',
      nickname: 'SafeInvestor',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop&crop=face',
      verified: false,
      total_strategies: 3,
      total_subscribers: 560
    },
    type: 'dca',
    risk_level: 'conservative',
    supported_exchanges: ['OKX', 'Binance', 'Coinbase'],
    supported_pairs: ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT'],
    pricing: {
      type: 'free',
      price_monthly: null,
      share_ratio: null
    },
    stats: {
      subscribers: 2340,
      copies: 5600,
      reviews: 4.9,
      running_users: 1890
    },
    performance: {
      backtest: {
        period: '2024-01-01 ~ 2024-12-31',
        return_total: 45.67,
        return_30d: 3.21,
        max_drawdown: -5.8,
        sharpe_ratio: 2.89,
        win_rate: 85.2,
        total_trades: 365,
        monthly_returns: [2.5, 3.2, 4.1, 3.8, 4.2, 2.9, 5.1, 4.8, 3.9, 4.1, 3.8, 3.4]
      },
      live: {
        period: '2024-04-01 ~ 2025-01-15',
        return_total: 38.92,
        return_30d: 2.89,
        max_drawdown: -4.2,
        sharpe_ratio: 3.12,
        win_rate: 88.5,
        total_trades: 290,
        monthly_returns: [3.1, 4.2, 2.8, 5.2, 4.5, 3.8, 4.1, 4.8, 3.2]
      }
    },
    description: {
      summary: '智能定投策略，结合市场情绪自动调整定投金额，熊市多买牛市少买。',
      suitable_market: '任何行情，长期持有',
      logic: '基于恐惧贪婪指数和RSI动态调整每期定投金额，极端恐惧时加倍投入。',
      risk_warning: '长期策略，短期可能浮亏，建议持有周期 1 年以上。'
    },
    version: '1.2.0',
    changelog: [
      { version: '1.2.0', date: '2024-12-20', content: '新增 SOL、BNB 支持' },
      { version: '1.1.0', date: '2024-08-15', content: '优化恐惧贪婪指数计算逻辑' }
    ],
    status: 'listed',
    created_at: '2024-02-01',
    updated_at: '2024-12-20'
  },
  {
    id: 'mkt_004',
    name: '波动率收割机',
    author: {
      id: 'author_004',
      nickname: 'VolatilityKing',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face',
      verified: true,
      total_strategies: 5,
      total_subscribers: 1200
    },
    type: 'volatility',
    risk_level: 'aggressive',
    supported_exchanges: ['OKX', 'Binance'],
    supported_pairs: ['BTC/USDT', 'ETH/USDT'],
    pricing: {
      type: 'subscription',
      price_monthly: 49.99,
      share_ratio: null
    },
    stats: {
      subscribers: 456,
      copies: 890,
      reviews: 4.5,
      running_users: 234
    },
    performance: {
      backtest: {
        period: '2024-01-01 ~ 2024-12-31',
        return_total: 312.45,
        return_30d: 25.67,
        max_drawdown: -35.2,
        sharpe_ratio: 1.45,
        win_rate: 52.3,
        total_trades: 890,
        monthly_returns: [28.5, -15.2, 42.3, 35.6, -22.4, 55.2, 32.1, -18.5, 48.9, 42.3, 55.6, 28.1]
      },
      live: {
        period: '2024-10-01 ~ 2025-01-15',
        return_total: 78.34,
        return_30d: 22.45,
        max_drawdown: -28.6,
        sharpe_ratio: 1.32,
        win_rate: 50.8,
        total_trades: 234,
        monthly_returns: [35.2, -18.5, 38.9, 22.7]
      }
    },
    description: {
      summary: '专注于高波动行情的激进策略，通过期权思维捕捉大幅波动收益。',
      suitable_market: '高波动行情、黑天鹅事件',
      logic: '基于 ATR 突破和波动率扩张识别入场时机，使用期权式止损限制风险。',
      risk_warning: '高风险高收益，单次亏损可能较大，仅适合风险偏好高的用户。'
    },
    version: '2.5.0',
    changelog: [
      { version: '2.5.0', date: '2025-01-08', content: '增强波动率预测模型' },
      { version: '2.4.0', date: '2024-11-20', content: '优化止损逻辑，降低最大回撤' }
    ],
    status: 'listed',
    created_at: '2024-05-10',
    updated_at: '2025-01-08'
  },
  {
    id: 'mkt_005',
    name: '跨所套利机器人',
    author: {
      id: 'author_005',
      nickname: 'ArbitrageBot',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face',
      verified: true,
      total_strategies: 2,
      total_subscribers: 890
    },
    type: 'arbitrage',
    risk_level: 'conservative',
    supported_exchanges: ['OKX', 'Binance', 'Bybit', 'Gate.io'],
    supported_pairs: ['BTC/USDT', 'ETH/USDT', 'USDT/USDC'],
    pricing: {
      type: 'profit_share',
      price_monthly: null,
      share_ratio: 20
    },
    stats: {
      subscribers: 678,
      copies: 1234,
      reviews: 4.7,
      running_users: 456
    },
    performance: {
      backtest: {
        period: '2024-01-01 ~ 2024-12-31',
        return_total: 28.56,
        return_30d: 2.12,
        max_drawdown: -1.8,
        sharpe_ratio: 4.56,
        win_rate: 94.5,
        total_trades: 12450,
        monthly_returns: [2.1, 2.3, 2.5, 2.2, 2.4, 2.1, 2.6, 2.4, 2.3, 2.5, 2.2, 2.0]
      },
      live: {
        period: '2024-06-01 ~ 2025-01-15',
        return_total: 18.34,
        return_30d: 1.89,
        max_drawdown: -1.2,
        sharpe_ratio: 5.12,
        win_rate: 96.2,
        total_trades: 8920,
        monthly_returns: [2.3, 2.5, 2.2, 2.8, 2.4, 2.1, 2.0, 2.0]
      }
    },
    description: {
      summary: '利用交易所之间的价格差异进行无风险套利，稳定收益低回撤。',
      suitable_market: '任何行情',
      logic: '实时监控多交易所价差，当价差超过手续费成本时自动执行套利交易。',
      risk_warning: '需要多交易所资金分配，对延迟敏感，收益相对较低但稳定。'
    },
    version: '1.8.0',
    changelog: [
      { version: '1.8.0', date: '2025-01-02', content: '新增 Gate.io 支持' },
      { version: '1.7.0', date: '2024-10-15', content: '优化价差计算速度' }
    ],
    status: 'listed',
    created_at: '2024-04-01',
    updated_at: '2025-01-02'
  }
];

// 用户自己的策略（初始数据）
const INITIAL_MY_STRATEGIES = [
  {
    id: 'my_001',
    name: '网格交易策略',
    type: 'grid',
    risk_level: 'balanced',
    supported_pairs: ['BTC/USDT'],
    status: 'running', // draft | saved | tested | running | paused | error
    source: 'user',
    performance: {
      return_total: 28.56,
      return_30d: 12.34,
      max_drawdown: -8.5,
      win_rate: 72
    },
    running_days: 32,
    created_at: '2024-12-14'
  },
  {
    id: 'my_002',
    name: '动量追踪策略',
    type: 'trend',
    risk_level: 'balanced',
    supported_pairs: ['ETH/USDT'],
    status: 'running',
    source: 'user',
    performance: {
      return_total: 15.23,
      return_30d: 8.45,
      max_drawdown: -6.2,
      win_rate: 65
    },
    running_days: 18,
    created_at: '2024-12-28'
  },
  {
    id: 'my_003',
    name: '均值回归策略',
    type: 'volatility',
    risk_level: 'aggressive',
    supported_pairs: ['SOL/USDT'],
    status: 'tested',
    source: 'user',
    performance: {
      return_total: 45.67,
      return_30d: 15.23,
      max_drawdown: -12.5,
      win_rate: 58
    },
    running_days: 0,
    created_at: '2025-01-05'
  },
  {
    id: 'my_004',
    name: 'MACD交叉策略',
    type: 'trend',
    risk_level: 'balanced',
    supported_pairs: ['BNB/USDT'],
    status: 'paused',
    source: 'user',
    performance: {
      return_total: -5.67,
      return_30d: -2.34,
      max_drawdown: -15.2,
      win_rate: 42
    },
    running_days: 45,
    created_at: '2024-11-01'
  }
];

// ===== 状态管理类 =====
class QuantToolStore {
  constructor() {
    this.init();
  }

  init() {
    // 初始化市场策略
    if (!localStorage.getItem('marketplace_strategies')) {
      localStorage.setItem('marketplace_strategies', JSON.stringify(MOCK_MARKETPLACE_STRATEGIES));
    }
    // 初始化我的策略
    if (!localStorage.getItem('my_strategies')) {
      localStorage.setItem('my_strategies', JSON.stringify(INITIAL_MY_STRATEGIES));
    }
    // 初始化已购买策略ID列表
    if (!localStorage.getItem('purchased_strategies')) {
      localStorage.setItem('purchased_strategies', JSON.stringify([]));
    }
    // 初始化筛选器状态
    if (!localStorage.getItem('marketplace_filters')) {
      localStorage.setItem('marketplace_filters', JSON.stringify({
        risk_level: 'all',
        type: 'all',
        free_only: false,
        sort_by: 'return_30d',
        sort_order: 'desc'
      }));
    }
    // 初始化回测结果
    if (!localStorage.getItem('backtest_results')) {
      localStorage.setItem('backtest_results', JSON.stringify([]));
    }
  }

  // ===== 回测相关方法 =====

  // 简单哈希函数生成伪随机种子
  _hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }

  // 基于种子的伪随机数生成器
  _seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  // 生成回测配置的唯一键
  _getBacktestConfigKey(strategyId, config) {
    return `${strategyId}_${config.period}_${config.timeframe}_${config.initial_capital}_${config.fee_rate}_${config.slippage}`;
  }

  // 运行回测
  runBacktest(strategyId, config) {
    const strategy = this.getMyStrategies().find(s => s.id === strategyId);
    if (!strategy) return { success: false, message: '策略不存在' };

    // 生成种子确保可复现
    const configKey = this._getBacktestConfigKey(strategyId, config);
    const seed = this._hashCode(configKey);

    // 检查是否存在相同配置的回测，如果存在则覆盖
    let backtests = this.getBacktestResults();
    const existingIndex = backtests.findIndex(b =>
      b.strategy_id === strategyId &&
      this._getBacktestConfigKey(b.strategy_id, b.config) === configKey
    );

    // 基于策略现有performance生成mock数据
    const basePerf = strategy.performance || { return_total: 20, return_30d: 5, max_drawdown: 10, win_rate: 60 };

    // 根据config调整基准
    let periodMultiplier = 1;
    if (config.period === '30d') periodMultiplier = 0.3;
    else if (config.period === '90d') periodMultiplier = 0.7;
    else if (config.period === '1y') periodMultiplier = 1;
    else periodMultiplier = 1.2;

    // 使用种子生成扰动
    const r1 = this._seededRandom(seed);
    const r2 = this._seededRandom(seed + 1);
    const r3 = this._seededRandom(seed + 2);
    const r4 = this._seededRandom(seed + 3);

    const metrics = {
      return_total: Math.round((basePerf.return_total * periodMultiplier * (0.9 + r1 * 0.2)) * 100) / 100,
      return_30d: Math.round((basePerf.return_30d * (0.85 + r2 * 0.3)) * 100) / 100,
      max_drawdown: Math.round((Math.abs(basePerf.max_drawdown || 10) * (0.8 + r3 * 0.4)) * 100) / 100, // 正数语义
      sharpe_ratio: Math.round((1.5 + r4 * 1.5) * 100) / 100,
      win_rate: Math.round((basePerf.win_rate * (0.9 + r1 * 0.2)) * 10) / 10,
      total_trades: Math.floor(100 + r2 * 400),
      profit_factor: Math.round((1.5 + r3 * 1.5) * 100) / 100,
      avg_trade_duration: ['2.5h', '4.2h', '8.1h', '12.5h', '1.2d'][Math.floor(r4 * 5)]
    };

    // 生成净值曲线 (基于初始资金)
    const dataPoints = config.period === '30d' ? 30 : config.period === '90d' ? 90 : 365;
    const equity_curve = [config.initial_capital];
    const drawdown_curve = [0];
    let maxEquity = config.initial_capital;

    for (let i = 1; i < dataPoints; i++) {
      const dailyReturn = (metrics.return_total / dataPoints) * (0.5 + this._seededRandom(seed + i) * 1);
      const newEquity = Math.round(equity_curve[i - 1] * (1 + dailyReturn / 100) * 100) / 100;
      equity_curve.push(newEquity);
      maxEquity = Math.max(maxEquity, newEquity);
      const dd = Math.round((maxEquity - newEquity) / maxEquity * 100 * 100) / 100;
      drawdown_curve.push(dd);
    }

    // 生成月度收益
    const monthCount = config.period === '30d' ? 1 : config.period === '90d' ? 3 : 12;
    const monthly_returns = [];
    const avgMonthlyReturn = metrics.return_total / monthCount;
    for (let i = 0; i < monthCount; i++) {
      const mr = Math.round(avgMonthlyReturn * (0.5 + this._seededRandom(seed + 100 + i) * 1) * 100) / 100;
      monthly_returns.push(mr);
    }

    // 生成交易列表
    const trades = [];
    const pairOptions = strategy.supported_pairs || ['BTC/USDT'];
    const pair = pairOptions[0];
    let tradeId = 1;
    const tradeCount = Math.min(metrics.total_trades, 50); // 最多存50条

    for (let i = 0; i < tradeCount; i += 2) {
      const basePrice = 40000 + this._seededRandom(seed + 200 + i) * 20000;
      const buyPrice = Math.round(basePrice * 100) / 100;
      const sellPrice = Math.round(buyPrice * (0.98 + this._seededRandom(seed + 201 + i) * 0.06) * 100) / 100;
      const amount = Math.round((0.01 + this._seededRandom(seed + 202 + i) * 0.1) * 1000) / 1000;
      const pnl = Math.round((sellPrice - buyPrice) * amount * 100) / 100;

      const dayOffset = Math.floor(i / 2);
      const buyDate = new Date(Date.now() - (dataPoints - dayOffset) * 24 * 60 * 60 * 1000);
      const sellDate = new Date(buyDate.getTime() + (2 + Math.floor(this._seededRandom(seed + 203 + i) * 24)) * 60 * 60 * 1000);

      trades.push({
        id: tradeId++,
        type: 'buy',
        pair: pair,
        time: buyDate.toISOString().replace('T', ' ').substring(0, 16),
        price: buyPrice,
        amount: amount,
        pnl: null
      });
      trades.push({
        id: tradeId++,
        type: 'sell',
        pair: pair,
        time: sellDate.toISOString().replace('T', ' ').substring(0, 16),
        price: sellPrice,
        amount: amount,
        pnl: pnl
      });
    }

    // 计算日期范围
    const endDate = new Date();
    let startDate;
    if (config.period === '30d') startDate = new Date(endDate - 30 * 24 * 60 * 60 * 1000);
    else if (config.period === '90d') startDate = new Date(endDate - 90 * 24 * 60 * 60 * 1000);
    else if (config.period === '1y') startDate = new Date(endDate - 365 * 24 * 60 * 60 * 1000);
    else startDate = new Date(config.start_date || (endDate - 180 * 24 * 60 * 60 * 1000));

    const backtestResult = {
      id: 'bt_' + Date.now(),
      strategy_id: strategyId,
      strategy_name: strategy.name,
      config: {
        period: config.period,
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0],
        timeframe: config.timeframe,
        initial_capital: config.initial_capital,
        fee_rate: config.fee_rate,
        slippage: config.slippage
      },
      metrics: metrics,
      equity_curve: equity_curve,
      drawdown_curve: drawdown_curve,
      monthly_returns: monthly_returns,
      trades: trades,
      created_at: new Date().toISOString()
    };

    // 覆盖或新增
    if (existingIndex !== -1) {
      backtests[existingIndex] = backtestResult;
    } else {
      backtests.unshift(backtestResult);
    }
    localStorage.setItem('backtest_results', JSON.stringify(backtests));

    return { success: true, backtestId: backtestResult.id, message: '回测完成' };
  }

  // 获取所有回测结果
  getBacktestResults() {
    return JSON.parse(localStorage.getItem('backtest_results') || '[]');
  }

  // 根据ID获取单条回测
  getBacktest(id) {
    const results = this.getBacktestResults();
    return results.find(r => r.id === id);
  }

  // 获取某策略的所有回测记录
  getBacktestsByStrategy(strategyId) {
    const results = this.getBacktestResults();
    return results.filter(r => r.strategy_id === strategyId);
  }

  // 保存回测结果到策略
  saveBacktestToStrategy(backtestId) {
    const backtest = this.getBacktest(backtestId);
    if (!backtest) return { success: false, message: '回测记录不存在' };

    const strategies = this.getMyStrategies();
    const index = strategies.findIndex(s => s.id === backtest.strategy_id);
    if (index === -1) return { success: false, message: '策略不存在' };

    const strategy = strategies[index];

    // 只有非运行状态才更新为tested
    if (!['running', 'paused'].includes(strategy.status)) {
      strategy.status = 'tested';
    }

    // 更新performance
    strategy.performance = {
      return_total: backtest.metrics.return_total,
      return_30d: backtest.metrics.return_30d,
      max_drawdown: backtest.metrics.max_drawdown, // 正数语义
      win_rate: backtest.metrics.win_rate
    };

    // 添加回测关联信息
    strategy.last_backtest_id = backtestId;
    strategy.last_backtest_at = backtest.created_at;
    strategy.last_backtest_config = backtest.config;

    strategies[index] = strategy;
    localStorage.setItem('my_strategies', JSON.stringify(strategies));

    return { success: true, message: '已保存回测结果' };
  }

  // ===== 市场策略相关 =====
  getMarketplaceStrategies() {
    return JSON.parse(localStorage.getItem('marketplace_strategies') || '[]');
  }

  getMarketplaceStrategy(id) {
    const strategies = this.getMarketplaceStrategies();
    return strategies.find(s => s.id === id);
  }

  getFilteredMarketplaceStrategies() {
    const strategies = this.getMarketplaceStrategies();
    const filters = this.getFilters();

    let filtered = strategies.filter(s => s.status === 'listed');

    // 风险等级筛选
    if (filters.risk_level !== 'all') {
      filtered = filtered.filter(s => s.risk_level === filters.risk_level);
    }

    // 策略类型筛选
    if (filters.type !== 'all') {
      filtered = filtered.filter(s => s.type === filters.type);
    }

    // 只看免费
    if (filters.free_only) {
      filtered = filtered.filter(s => s.pricing.type === 'free');
    }

    // 排序
    filtered.sort((a, b) => {
      let valA, valB;
      switch (filters.sort_by) {
        case 'return_30d':
          valA = a.performance.backtest.return_30d;
          valB = b.performance.backtest.return_30d;
          break;
        case 'max_drawdown':
          valA = Math.abs(a.performance.backtest.max_drawdown);
          valB = Math.abs(b.performance.backtest.max_drawdown);
          break;
        case 'subscribers':
          valA = a.stats.subscribers;
          valB = b.stats.subscribers;
          break;
        default:
          valA = a.performance.backtest.return_30d;
          valB = b.performance.backtest.return_30d;
      }
      return filters.sort_order === 'desc' ? valB - valA : valA - valB;
    });

    return filtered;
  }

  // ===== 筛选器相关 =====
  getFilters() {
    return JSON.parse(localStorage.getItem('marketplace_filters') || '{}');
  }

  setFilters(filters) {
    const current = this.getFilters();
    localStorage.setItem('marketplace_filters', JSON.stringify({ ...current, ...filters }));
  }

  // ===== 我的策略相关 =====
  getMyStrategies() {
    return JSON.parse(localStorage.getItem('my_strategies') || '[]');
  }

  addMyStrategy(strategy) {
    const strategies = this.getMyStrategies();
    strategies.unshift(strategy);
    localStorage.setItem('my_strategies', JSON.stringify(strategies));
  }

  updateMyStrategy(id, updates) {
    const strategies = this.getMyStrategies();
    const index = strategies.findIndex(s => s.id === id);
    if (index !== -1) {
      strategies[index] = { ...strategies[index], ...updates };
      localStorage.setItem('my_strategies', JSON.stringify(strategies));
    }
  }

  // ===== 购买相关 =====
  getPurchasedStrategyIds() {
    return JSON.parse(localStorage.getItem('purchased_strategies') || '[]');
  }

  isPurchased(strategyId) {
    return this.getPurchasedStrategyIds().includes(strategyId);
  }

  purchaseStrategy(marketStrategyId) {
    const marketStrategy = this.getMarketplaceStrategy(marketStrategyId);
    if (!marketStrategy) return { success: false, message: '策略不存在' };

    if (this.isPurchased(marketStrategyId)) {
      return { success: false, message: '您已购买过此策略' };
    }

    // 添加到已购买列表
    const purchased = this.getPurchasedStrategyIds();
    purchased.push(marketStrategyId);
    localStorage.setItem('purchased_strategies', JSON.stringify(purchased));

    // 复制到我的策略
    const myStrategy = {
      id: 'my_' + Date.now(),
      name: marketStrategy.name,
      type: marketStrategy.type,
      risk_level: marketStrategy.risk_level,
      supported_pairs: marketStrategy.supported_pairs,
      status: 'saved',
      source: 'market',
      market_id: marketStrategyId,
      author: marketStrategy.author.nickname,
      performance: {
        return_total: marketStrategy.performance.live.return_total,
        return_30d: marketStrategy.performance.live.return_30d,
        max_drawdown: marketStrategy.performance.live.max_drawdown,
        win_rate: marketStrategy.performance.live.win_rate
      },
      running_days: 0,
      created_at: new Date().toISOString().split('T')[0]
    };

    this.addMyStrategy(myStrategy);

    // 更新市场策略订阅数
    const strategies = this.getMarketplaceStrategies();
    const index = strategies.findIndex(s => s.id === marketStrategyId);
    if (index !== -1) {
      strategies[index].stats.subscribers++;
      strategies[index].stats.copies++;
      localStorage.setItem('marketplace_strategies', JSON.stringify(strategies));
    }

    return { success: true, message: '已导入到我的策略', strategyId: myStrategy.id };
  }

  // ===== 发布相关 =====
  publishStrategy(myStrategyId, publishInfo) {
    const myStrategy = this.getMyStrategies().find(s => s.id === myStrategyId);
    if (!myStrategy) return { success: false, message: '策略不存在' };
    if (myStrategy.status !== 'tested' && myStrategy.status !== 'running' && myStrategy.status !== 'paused') {
      return { success: false, message: '只有已回测的策略才能发布' };
    }

    const marketStrategy = {
      id: 'mkt_' + Date.now(),
      name: myStrategy.name,
      author: {
        id: 'current_user',
        nickname: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        verified: true,
        total_strategies: 1,
        total_subscribers: 0
      },
      type: myStrategy.type,
      risk_level: publishInfo.risk_level || myStrategy.risk_level,
      supported_exchanges: ['OKX', 'Binance'],
      supported_pairs: myStrategy.supported_pairs,
      pricing: publishInfo.pricing,
      stats: {
        subscribers: 0,
        copies: 0,
        reviews: 0,
        running_users: 0
      },
      performance: {
        backtest: {
          period: '2024-01-01 ~ 2024-12-31',
          return_total: myStrategy.performance.return_total * 3,
          return_30d: myStrategy.performance.return_30d,
          max_drawdown: myStrategy.performance.max_drawdown,
          sharpe_ratio: 1.85,
          win_rate: myStrategy.performance.win_rate,
          total_trades: 500,
          monthly_returns: [5, 8, 6, 12, 9, -3, 15, 10, 7, 8, 11, 6]
        },
        live: {
          period: '2024-10-01 ~ 2025-01-15',
          return_total: myStrategy.performance.return_total,
          return_30d: myStrategy.performance.return_30d,
          max_drawdown: myStrategy.performance.max_drawdown,
          sharpe_ratio: 1.65,
          win_rate: myStrategy.performance.win_rate,
          total_trades: 150,
          monthly_returns: [10, 8, 12, 9]
        }
      },
      description: {
        summary: publishInfo.summary || '用户发布的策略',
        suitable_market: publishInfo.suitable_market || '通用',
        logic: publishInfo.logic || '暂无详细说明',
        risk_warning: publishInfo.risk_warning || '投资有风险，入市需谨慎'
      },
      version: '1.0.0',
      changelog: [
        { version: '1.0.0', date: new Date().toISOString().split('T')[0], content: '首次发布' }
      ],
      status: 'pending_review',
      created_at: new Date().toISOString().split('T')[0],
      updated_at: new Date().toISOString().split('T')[0]
    };

    const strategies = this.getMarketplaceStrategies();
    strategies.unshift(marketStrategy);
    localStorage.setItem('marketplace_strategies', JSON.stringify(strategies));

    return { success: true, message: '发布成功，等待审核', strategyId: marketStrategy.id };
  }

  // ===== 工具方法 =====
  getTypeLabel(type) {
    const labels = {
      grid: '网格',
      trend: '趋势',
      volatility: '波动率',
      arbitrage: '套利',
      dca: '定投'
    };
    return labels[type] || type;
  }

  getRiskLabel(risk) {
    const labels = {
      conservative: '稳健',
      balanced: '平衡',
      aggressive: '激进'
    };
    return labels[risk] || risk;
  }

  getRiskColor(risk) {
    const colors = {
      conservative: '#22C55E',
      balanced: '#F59E0B',
      aggressive: '#EF4444'
    };
    return colors[risk] || '#94A3B8';
  }

  getPricingLabel(pricing) {
    if (pricing.type === 'free') return '免费';
    if (pricing.type === 'subscription') return `$${pricing.price_monthly}/月`;
    if (pricing.type === 'profit_share') return `收益分成 ${pricing.share_ratio}%`;
    return '未知';
  }

  getPricingBadgeClass(type) {
    const classes = {
      free: 'badge-success',
      subscription: 'badge-primary',
      profit_share: 'badge-warning'
    };
    return classes[type] || 'badge-primary';
  }

  // 重置所有数据
  reset() {
    localStorage.removeItem('marketplace_strategies');
    localStorage.removeItem('my_strategies');
    localStorage.removeItem('purchased_strategies');
    localStorage.removeItem('marketplace_filters');
    this.init();
  }
}

// 创建全局实例
const store = new QuantToolStore();

// Toast 提示函数
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;

  // 添加样式
  toast.style.cssText = `
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'success' ? 'rgba(34, 197, 94, 0.95)' : type === 'error' ? 'rgba(239, 68, 68, 0.95)' : 'rgba(99, 102, 241, 0.95)'};
    color: white;
    padding: 12px 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    animation: toastIn 0.3s ease, toastOut 0.3s ease 2.7s forwards;
  `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 添加 Toast 动画样式
const toastStyles = document.createElement('style');
toastStyles.textContent = `
  @keyframes toastIn {
    from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes toastOut {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
  }
`;
document.head.appendChild(toastStyles);
