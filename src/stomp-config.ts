import {StompHeaders} from './stomp-headers';
import {
  closeEventCallbackType,
  debugFnType,
  frameCallbackType,
  messageCallbackType
} from './types';
import {Versions} from './versions';

/**
 * Configuration options for STOMP Client, each key corresponds to
 * field by the same name in {@link Client}. This can be passed to
 * the constructor of {@link Client} or to [Client#configure]{@link Client#configure}.
 */
export class StompConfig {
  /**
   * See [Client#brokerURL]{@link Client#brokerURL}.
   */
  public brokerURL?: string;

  /**
   * See See [Client#stompVersions]{@link Client#stompVersions}.
   */
  public stompVersions?: Versions;

  /**
   * See [Client#webSocketFactory]{@link Client#webSocketFactory}.
   */
  public webSocketFactory?: () => any;

  /**
   * See [Client#reconnectDelay]{@link Client#reconnectDelay}.
   */
  public reconnectDelay?: number;

  /**
   * See [Client#heartbeatIncoming]{@link Client#heartbeatIncoming}.
   */
  public heartbeatIncoming?: number;

  /**
   * See [Client#heartbeatOutgoing]{@link Client#heartbeatOutgoing}.
   */
  public heartbeatOutgoing?: number;

  /**
   * See [Client#connectHeaders]{@link Client#connectHeaders}.
   */
  public connectHeaders?: StompHeaders;

  /**
   * See [Client#disconnectHeaders]{@link Client#disconnectHeaders}.
   */
  public disconnectHeaders?: StompHeaders;

  /**
   * See [Client#onUnhandledMessage]{@link Client#onUnhandledMessage}.
   */
  public onUnhandledMessage?: messageCallbackType;

  /**
   * See [Client#onUnhandledReceipt]{@link Client#onUnhandledReceipt}.
   */
  public onUnhandledReceipt?: frameCallbackType;

  /**
   * See [Client#onUnhandledFrame]{@link Client#onUnhandledFrame}.
   */
  public onUnhandledFrame?: frameCallbackType;

  /**
   * See [Client#beforeConnect]{@link Client#beforeConnect}.
   */
  public beforeConnect?: () => void;

  /**
   * See [Client#onConnect]{@link Client#onConnect}.
   */
  public onConnect?: frameCallbackType;

  /**
   * See [Client#onDisconnect]{@link Client#onDisconnect}.
   */
  public onDisconnect?: frameCallbackType;

  /**
   * See [Client#onStompError]{@link Client#onStompError}.
   */
  public onStompError?: frameCallbackType;

  /**
   * See [Client#onWebSocketClose]{@link Client#onWebSocketClose}.
   */
  public onWebSocketClose?: closeEventCallbackType;

  /**
   * See [Client#debug]{@link Client#debug}.
   */
  public debug?: debugFnType;
}
