'use strict';

// A set of utility functions for /common operations across our application
const utils = {
    // Find and return a DOM element given an ID
    getCanvas(id) {
        const canvas = document.getElementById(id);

        // Ensure we have a canvas
        if(!canvas) {
            console.error(`There is no canvas with id: ${id} on this page.`);
            return null;
        }

        return canvas;
    },

    // Given a canvas element, return the WebGL2 context
    getGLContext(canvas) {
        return canvas.getContext('webgl2') || console.error('WebGL2 is not available in your browser.');
    },

    // Given a canvas element, expand it to the size of the window
    //  and ensure that it automatically resizes as the window changes
    autoResizeCanvas(canvas) {
        const expandFullScreen = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        expandFullScreen();
        window.addEventListener('resize', expandFullScreen);
    },

    // Given a WebGL context and an id for a shader script,
    //  return a compiled shader
    getShader(gl, id) {
        const script = document.getElementById(id);
        if(!script) {
            return null;
        }

        const shaderString = script.text.trim();

        // Assign shader depending on the type of shader
        let shader;
        if(script.type === 'x-shader/x-vertex') {
            shader = gl.createShader(gl.VERTEX_SHADER);
        } else if(script.type === 'x-shader/x-fragment') {
            shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else {
            return null;
        }

        // Compile the shader using the supplied shader code
        gl.shaderSource(shader, shaderString);
        gl.compileShader(shader);

        // Ensure the shader is valid
        if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            return null;
        }

        return shader;
    }
};