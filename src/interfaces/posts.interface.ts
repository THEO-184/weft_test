export type PostResponse = PostData[];

export interface PostData {
	userId: number;
	id: number;
	title: string;
	body: string;
}
