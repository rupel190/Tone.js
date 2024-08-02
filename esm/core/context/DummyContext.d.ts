import { BaseContext } from "./BaseContext.js";
import { Seconds } from "../type/Units.js";
import { AnyAudioContext } from "./AudioContext.js";
import type { DrawClass as Draw } from "../util/Draw.js";
import type { DestinationClass as Destination } from "./Destination.js";
import type { TransportClass as Transport } from "../clock/Transport.js";
import type { ListenerClass as Listener } from "./Listener.js";
export declare class DummyContext extends BaseContext {
    createAnalyser(): AnalyserNode;
    createOscillator(): OscillatorNode;
    createBufferSource(): AudioBufferSourceNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(_numberOfChannels: number, _length: number, _sampleRate: number): AudioBuffer;
    createChannelMerger(_numberOfInputs?: number | undefined): ChannelMergerNode;
    createChannelSplitter(_numberOfOutputs?: number | undefined): ChannelSplitterNode;
    createConstantSource(): ConstantSourceNode;
    createConvolver(): ConvolverNode;
    createDelay(_maxDelayTime?: number | undefined): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createIIRFilter(_feedForward: number[] | Float32Array, _feedback: number[] | Float32Array): IIRFilterNode;
    createPanner(): PannerNode;
    createPeriodicWave(_real: number[] | Float32Array, _imag: number[] | Float32Array, _constraints?: PeriodicWaveConstraints | undefined): PeriodicWave;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    createMediaStreamSource(_stream: MediaStream): MediaStreamAudioSourceNode;
    createMediaElementSource(_element: HTMLMediaElement): MediaElementAudioSourceNode;
    createMediaStreamDestination(): MediaStreamAudioDestinationNode;
    decodeAudioData(_audioData: ArrayBuffer): Promise<AudioBuffer>;
    createAudioWorkletNode(_name: string, _options?: Partial<AudioWorkletNodeOptions>): AudioWorkletNode;
    get rawContext(): AnyAudioContext;
    addAudioWorkletModule(_url: string): Promise<void>;
    lookAhead: number;
    latencyHint: number;
    resume(): Promise<void>;
    setTimeout(_fn: (...args: any[]) => void, _timeout: Seconds): number;
    clearTimeout(_id: number): this;
    setInterval(_fn: (...args: any[]) => void, _interval: Seconds): number;
    clearInterval(_id: number): this;
    getConstant(_val: number): AudioBufferSourceNode;
    get currentTime(): Seconds;
    get state(): AudioContextState;
    get sampleRate(): number;
    get listener(): Listener;
    get transport(): Transport;
    get draw(): Draw;
    set draw(_d: Draw);
    get destination(): Destination;
    set destination(_d: Destination);
    now(): number;
    immediate(): number;
    readonly isOffline: boolean;
}
