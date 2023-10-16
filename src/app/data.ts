import { Signal } from "@angular/core";

/**
 * CounterState représente l'état du compteur
 * - soit le compteur est arrêté
 * - soit le compteur est en cours de décompte
 */
export type CounterState = {readonly type: "stopped"}
                         | {readonly type: "counting", readonly count: number}

/**
 * initialCs représente l'état initial du compteur
 */
export const initialCs: CounterState = {type: "stopped"};

/**
 * countingCs représente l'état initial du compteur en cours de décompte (avec le compteur à zéro)
 */
const countingCs: CounterState = {type: "counting", count: 0}

/**
 * toggleCounterState permet de passer d'un état du compteur à l'autre
 * Lorsqu'on repasse dans l'état "en cours de décompte", le compteur est remis à zéro
 * @param cs 
 * @returns 
 */
export function toggleCounterState(cs: CounterState): CounterState {
    return cs.type === "counting" ? initialCs : countingCs;
}


/**
 * AppState représente l'état du compteur ainsi que le nombre de fois où le compteur a été en cours de décompte
 */
export interface AppState {
  readonly cs: CounterState;
  readonly nbTimeCounting: number;
}

/**
 * initialAppState représente la valeur initiale pour AppState
 */
export const initialState: AppState = {
  cs: initialCs,
  nbTimeCounting: 0
}

/**
 * TimerServiceInterface représente l'interface que les services de chronomètre doivent implémenter
 */
export interface TimerServiceInterface {
  readonly state: Signal<AppState>
  toggle(): void;
}
