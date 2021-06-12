'use-strict';

const mat4 = {
    create() {
        return [
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, 0.0, 0.0, 1.0,
        ];
    },

    perspective(matrix, fovAngleDegree, aspectRatio, near, far) {
        const x = Math.tan(toRadians(fovAngleDegree) / 2.0);
        const y = aspectRatio * x;

        let a11 = 1 / y;
        let a22 = 1 / x;
        let a33 = -1 * ((far + near) / (far - near));
        let a34 = -1 * ((2 * far * near) / (far - near));

        const perspective = [
            a11, 0.0, 0.0, 0.0,
            0.0, a22, 0.0, 0.0,
            0.0, 0.0, a33, a34,
            0.0, 0.0, -1.0, 0.0
        ];

        return multiply4x4(perspective, matrix);
    },

    translate(matrix, translateVec3) {
        matrix[3] = matrix[3] + translateVec3[0];
        matrix[7] = matrix[7] + translateVec3[1];
        matrix[11] = matrix[11] + translateVec3[2];

        return matrix
    },
};

function toRadians(angle) {
    return angle * (Math.PI / 180.0);
};

function multiply4x4(first, second) {
    const a11 = first[0] * second[0] + 
                first[1] * second[4] + 
                first[2] * second[8] + 
                first[3] * second[12];

    const a12 = first[0] * second[1] + 
                first[1] * second[5] + 
                first[2] * second[9] + 
                first[3] * second[13];

    const a13 = first[0] * second[2] + 
                first[1] * second[6] + 
                first[2] * second[10] + 
                first[3] * second[14];

    const a14 = first[0] * second[3] + 
                first[1] * second[7] + 
                first[2] * second[11] + 
                first[3] * second[15];

    const a21 = first[4] * second[0] + 
                first[5] * second[4] + 
                first[6] * second[8] + 
                first[7] * second[12];

    const a22 = first[4] * second[1] + 
                first[5] * second[5] + 
                first[6] * second[9] + 
                first[7] * second[13];

    const a23 = first[4] * second[2] + 
                first[5] * second[6] + 
                first[6] * second[10] + 
                first[7] * second[14];

    const a24 = first[4] * second[3] + 
                first[5] * second[7] + 
                first[6] * second[11] + 
                first[7] * second[15];

    const a31 = first[8] * second[0] + 
                first[9] * second[4] + 
                first[10] * second[8] + 
                first[11] * second[12];

    const a32 = first[8] * second[1] + 
                first[9] * second[5] + 
                first[10] * second[9] + 
                first[11] * second[13];

    const a33 = first[8] * second[2] + 
                first[9] * second[6] + 
                first[10] * second[10] + 
                first[11] * second[14];

    const a34 = first[8] * second[3] + 
                first[9] * second[7] + 
                first[10] * second[11] + 
                first[11] * second[15];

    const a41 = first[12] * second[0] + 
                first[13] * second[4] + 
                first[14] * second[8] + 
                first[15] * second[12];

    const a42 = first[12] * second[1] + 
                first[13] * second[5] + 
                first[14] * second[9] + 
                first[15] * second[13];

    const a43 = first[12] * second[2] + 
                first[13] * second[6] + 
                first[14] * second[10] + 
                first[15] * second[14];

    const a44 = first[12] * second[3] + 
                first[13] * second[7] + 
                first[14] * second[11] + 
                first[15] * second[15];

    return [
        a11, a12, a13, a14,
        a21, a22, a23, a24,
        a31, a32, a33, a34,
        a41, a42, a43, a44,
    ];
};