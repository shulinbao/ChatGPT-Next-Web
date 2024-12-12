export const OWNER = "HorseGPT";
export const REPO = "HorseGPT_Chat";
export const REPO_URL = `https://oneapi.nu.ac.cn`;
export const PLUGINS_REPO_URL = `https://github.com/${OWNER}/NextChat-Awesome-Plugins`;
export const ISSUE_URL = `https://oneapi.nu.ac.cn`;
export const UPDATE_URL = `https://github.com/${OWNER}/${REPO}#keep-updated`;
export const RELEASE_URL = `https://github.com/${OWNER}/${REPO}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const STABILITY_BASE_URL = "https://api.stability.ai";

export const OPENAI_BASE_URL = "https://oneapi.nu.ac.cn";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;

export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";

export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";

export const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";

export const MOONSHOT_BASE_URL = "https://api.moonshot.cn";
export const IFLYTEK_BASE_URL = "https://spark-api-open.xf-yun.com";

export const XAI_BASE_URL = "https://api.x.ai";

export const CHATGLM_BASE_URL = "https://open.bigmodel.cn";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = `${CACHE_URL_PREFIX}/upload`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
  Sd = "/sd",
  SdNew = "/sd-new",
  Artifacts = "/artifacts",
  SearchChat = "/search-chat",
}

export enum ApiPath {
  Cors = "",
  Azure = "/api/azure",
  OpenAI = "/api/openai",
  Anthropic = "/api/anthropic",
  Google = "/api/google",
  Baidu = "/api/baidu",
  ByteDance = "/api/bytedance",
  Alibaba = "/api/alibaba",
  Tencent = "/api/tencent",
  Moonshot = "/api/moonshot",
  Iflytek = "/api/iflytek",
  Stability = "/api/stability",
  Artifacts = "/api/artifacts",
  XAI = "/api/xai",
  ChatGLM = "/api/chatglm",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Plugin = "chat-next-web-plugin",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
  SdList = "sd-list",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
  Baidu = "Baidu",
  ByteDance = "ByteDance",
  Alibaba = "Alibaba",
  Tencent = "Tencent",
  Moonshot = "Moonshot",
  Stability = "Stability",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
}

// Google API safety settings, see https://ai.google.dev/gemini-api/docs/safety-settings
// BLOCK_NONE will not block any content, and BLOCK_ONLY_HIGH will block only high-risk content.
export enum GoogleSafetySettingsThreshold {
  BLOCK_NONE = "BLOCK_NONE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
}

export enum ModelProvider {
  Stability = "Stability",
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
  Ernie = "Ernie",
  Doubao = "Doubao",
  Qwen = "Qwen",
  Hunyuan = "Hunyuan",
  Moonshot = "Moonshot",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
}

export const Stability = {
  GeneratePath: "v2beta/stable-image/generate",
  ExampleEndpoint: "https://api.stability.ai",
};

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  SpeechPath: "v1/audio/speech",
  ImagePath: "v1/images/generations",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ChatPath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
  // https://<your_resource_name>.openai.azure.com/openai/deployments/<your_deployment_name>/images/generations?api-version=<api_version>
  ImagePath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/images/generations?api-version=${apiVersion}`,
  ExampleEndpoint: "https://{resource-url}/openai",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) =>
    `v1beta/models/${modelName}:streamGenerateContent`,
};

export const Baidu = {
  ExampleEndpoint: BAIDU_BASE_URL,
  ChatPath: (modelName: string) => {
    let endpoint = modelName;
    if (modelName === "ernie-4.0-8k") {
      endpoint = "completions_pro";
    }
    if (modelName === "ernie-4.0-8k-preview-0518") {
      endpoint = "completions_adv_pro";
    }
    if (modelName === "ernie-3.5-8k") {
      endpoint = "completions";
    }
    if (modelName === "ernie-speed-8k") {
      endpoint = "ernie_speed";
    }
    return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
  },
};

export const ByteDance = {
  ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
  ChatPath: "api/v3/chat/completions",
};

export const Alibaba = {
  ExampleEndpoint: ALIBABA_BASE_URL,
  ChatPath: "v1/services/aigc/text-generation/generation",
};

export const Tencent = {
  ExampleEndpoint: TENCENT_BASE_URL,
};

export const Moonshot = {
  ExampleEndpoint: MOONSHOT_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const Iflytek = {
  ExampleEndpoint: IFLYTEK_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const XAI = {
  ExampleEndpoint: XAI_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const ChatGLM = {
  ExampleEndpoint: CHATGLM_BASE_URL,
  ChatPath: "api/paas/v4/chat/completions",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-1.5-flash-latest";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4o": "2023-10",
  "gpt-4o-mini": "2023-10",
};

export const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
export const DEFAULT_TTS_ENGINES = ["OpenAI-TTS", "Edge-TTS"];
export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "zh-CN-XiaoxiaoNeural";
export const DEFAULT_TTS_MODELS = ["tts-1", "tts-1-hd"];
export const DEFAULT_TTS_VOICES = [
"zh-CN-XiaoxiaoNeural",
"zh-CN-YunxiNeural",
"zh-CN-YunjianNeural",
"zh-CN-XiaoyiNeural",
"zh-CN-YunyangNeural",
"zh-CN-XiaochenNeural",
"zh-CN-XiaochenMultilingualNeural",
"zh-CN-XiaohanNeural",
"zh-CN-XiaomengNeural",
"zh-CN-XiaomoNeural",
"zh-CN-XiaoqiuNeural",
"zh-CN-XiaorouNeural",
"zh-CN-XiaoruiNeural",
"zh-CN-XiaoshuangNeural",
"zh-CN-XiaoxiaoDialectsNeural",
"zh-CN-XiaoxiaoMultilingualNeural",
"zh-CN-XiaoyanNeural",
"zh-CN-XiaoyouNeural",
"zh-CN-XiaoyuMultilingualNeural",
"zh-CN-XiaozhenNeural",
"zh-CN-YunfengNeural",
"zh-CN-YunhaoNeural",
"zh-CN-YunjieNeural",
"zh-CN-YunxiaNeural",
"zh-CN-YunyeNeural",
"zh-CN-YunyiMultilingualNeural",
"zh-CN-YunzeNeural",
"zh-CN-YunfanMultilingualNeural",
"zh-CN-YunxiaoMultilingualNeural",
"zh-CN-guangxi-YunqiNeural",
"zh-CN-henan-YundengNeural",
"zh-CN-liaoning-XiaobeiNeural",
"zh-CN-liaoning-YunbiaoNeural",
"zh-CN-shaanxi-XiaoniNeural",
"zh-CN-shandong-YunxiangNeural",
"zh-CN-sichuan-YunxiNeural",
"zh-HK-HiuMaanNeural",
"zh-HK-WanLungNeural",
"zh-HK-HiuGaaiNeural",
"zh-TW-HsiaoChenNeural",
"zh-TW-YunJheNeural",
"zh-TW-HsiaoYuNeural",
"wuu-CN-XiaotongNeural",
"wuu-CN-YunzheNeural",
"yue-CN-XiaoMinNeural",
"yue-CN-YunSongNeural",
"en-US-AvaMultilingualNeural",
"en-US-AndrewMultilingualNeural",
"en-US-EmmaMultilingualNeural",
"en-US-BrianMultilingualNeural",
"en-US-AvaNeural",
"en-US-AndrewNeural",
"en-US-EmmaNeural",
"en-US-BrianNeural",
"en-US-JennyNeural",
"en-US-GuyNeural",
"en-US-AriaNeural",
"en-US-DavisNeural",
"en-US-JaneNeural",
"en-US-JasonNeural",
"en-US-SaraNeural",
"en-US-TonyNeural",
"en-US-NancyNeural",
"en-US-AmberNeural",
"en-US-AnaNeural",
"en-US-AshleyNeural",
"en-US-BrandonNeural",
"en-US-ChristopherNeural",
"en-US-CoraNeural",
"en-US-ElizabethNeural",
"en-US-EricNeural",
"en-US-JacobNeural",
"en-US-JennyMultilingualNeural",
"en-US-MichelleNeural",
"en-US-MonicaNeural",
"en-US-RogerNeural",
"en-US-RyanMultilingualNeural",
"en-US-SteffanNeural",
"en-US-AdamMultilingualNeural",
"en-US-AIGenerate1Neural",
"en-US-AIGenerate2Neural",
"en-US-AlloyTurboMultilingualNeural",
"en-US-AmandaMultilingualNeural",
"en-US-BlueNeural",
"en-US-BrandonMultilingualNeural",
"en-US-ChristopherMultilingualNeural",
];

const fominiModels = [
  "gpt-4o-mini",
];

const foModels = [
  "gpts",
];

const dalleModels = [
  "dall-e-3",
];

const geminiModels = [
  "gemini-1.5-flash-latest",
  "gemini-2.0-flash-exp",
];

const claudetModels = [
  "claude-3-haiku",
];

const horseModels = [
  "horseGPT-fast:latest",
];

const llamaModels = [
  "llama-3.2-90b-vision-preview",
];

const ttsModels = [
  "tts-1",
];


let seq = 1000; // 内置的模型序号生成器从1000开始
export const DEFAULT_MODELS = [
  ...fominiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "gpt-4o-mini",
      providerName: "OpenAI | 【首选】快速、稳定但上下文数量偏小，如因对话太长拒绝回复请新开对话",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...foModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "gpt-4o",
      providerName: "OpenAI | 高性能 gpt-4o 模型，能够完成复杂的任务，通过 Gpts 转发维持服务的稳定性",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...dalleModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "stable-diffusion",
      providerName: "Stable Diffusion | 图片生成，如生成速度慢说明在队列中，请稍等",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...geminiModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "gemini-1.5-flash",
      providerName: "Google | 谷歌的视觉大模型，并发数低，高峰期遇到错误请稍后重试",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...claudetModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "claude",
      providerName: "Claude | 速度快，但中文支持不好",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...horseModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "horsegpt",
      providerName: "HorseGPT | 【VIP】专用，使用本地算力的无审查大模型",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...llamaModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "llama",
      providerName: "Meta | 【VIP】专用，快速的多模态大模型",
      providerType: "test",
      sorted: 1,
    },
  })),
  ...ttsModels.map((name) => ({
    name,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "tts",
      providerName: "TTS | 文字转语音模型，可在设置中为对话开启",
      providerType: "test",
      sorted: 1,
    },
  })),

  
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const internalAllowedWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://bora.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];

export const DEFAULT_GA_ID = "G-89WN60ZK2E";
export const PLUGINS = [
  { name: "Plugins", path: Path.Plugins },
  { name: "Search Chat", path: Path.SearchChat },
];

export const SAAS_CHAT_URL = "https://oneapi.nu.ac.cn";
export const SAAS_CHAT_UTM_URL = "https://oneapi.nu.ac.cn";
export const GUIDE_URL = "https://oneapi.nu.ac.cn/guide";
