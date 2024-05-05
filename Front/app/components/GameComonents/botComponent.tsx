"use client"
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import GameClass from './GameClass';
import Score from './scoreComponent';

interface BotMap{
    name: string
    avatar: string
    map: string
    setBotGame:  Dispatch<SetStateAction<boolean>>;
}

let game: GameClass | null = null;

const BotComponent : React.FC<BotMap> = (prop) => {
    const gameDiv = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (gameDiv && gameDiv.current)
            game = new GameClass(gameDiv.current, prop.map, "BOT", "BOT")
        return () => {
            if (game)
                game.destroyGame();
        }
    }, []);

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className='flex sm:flex-row flex-col w-full h-full justify-center items-center'>
                <div className="flex flex-col items-center justify-end">
                     <Score avatar="/_next/image?url=%2Fbatman.png&w=3840&q=75" name="BATMAN" score={Infinity} />
                </div>
                <div 
                    ref={gameDiv} 
                    className="relative flex w-[90%] h-[50%] medium:w-[60%] medium:h-[60%] justify-center"
                >
                    <div 
						className="absolute inset-y-0 left-0 w-1/2 h-full opacity-0"
						onMouseDown={() => game?.setLeftPressed()}
						onMouseUp={() => game?.setFalsePressed()}
						onTouchStart={() => game?.setLeftPressed()}
						onTouchEnd={() => game?.setFalsePressed()}
					/>
					<div 
						className="absolute inset-y-0 right-0 w-1/2 h-full opacity-0"
						onMouseDown={() => game?.setRightPressed()}
						onMouseUp={() => game?.setFalsePressed()}
						onTouchStart={() => game?.setRightPressed()}
						onTouchEnd={() => game?.setFalsePressed()}
					/>
                </div>
                <div className="flex flex-col items-center justify-start">
                     <Score avatar={prop.avatar} name={prop.name} score={Infinity} />
                </div>
            </div>
            <div>
                <button
                    className="w-[200px] h-[50px] bg-black text-[white] cursor-pointer text-base m-2.5 px-5 py-2.5 rounded-[5px] border-[none] hover:bg-[#AF6915]"
                    type="button" onClick={()=>prop.setBotGame(false)}>
                        Cancel
                </button>
            </div>
        </div>
    );
};

export default BotComponent